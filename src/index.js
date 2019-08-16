// all the code for js goes into here
      // scene
      // camera
      // renderer
      // setting up the scene:
      var scene = new THREE.Scene();
      scene.background = new THREE.Color(0xbfd1e5);
      // setting up the camera:
      // There are few different cameras in 3js. Let's use PerspectiveCamera
      // 75 is the field of view. (FOV). The value is in degrees.
      // The secons one is the aspect ratio.
      // 0.1 and 100 are the near and far clipping plane.
      var camera = new THREE.PerspectiveCamera(75, window.innerWidth/ window.innerHeight, 0.1, 100);


      camera.position.set(-12,7,4);
      // setting up the renderer:
      var renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.shadowMap.enabled = true;
      // we add the renderer element to our HTML document
      document.body.appendChild(renderer.domElement);

      //loading texture:
      var textureloader = new THREE.TextureLoader();
      //Let's add the cube now:

      // To create a cube we need a BoxGeometry. This is an object that contains all the points (vertices) and fill (faces) of the cube.
      var geometry = new THREE.BoxGeometry(1,1,1);
      // We need a material to color it. 3js comes with several materials, but we will stick to the MeshBasicMaterial for now. All materials take an object of properties which will be applied to them.
      var material = new THREE.MeshNormalMaterial();
      // We need a Mesh. This is an object that takes a geometry, and applies a material to it, which we can then insert to our scene, and move freely arround.
      var cube = new THREE.Mesh(geometry, material);
      // By default, when we call scene.add(), the thing we add will be added to the coordinates (0,0,0). This would cause both the camera and the cube to be inside each other. To avoid this, we simply move the camera out a bit.
      scene.add (cube);

      // creating light:

      var ambientLight = new THREE.AmbientLight(0x404040);
      scene.add(ambientLight);

      var light = new THREE.DirectionalLight(0xffffff, 1);
      light.position.set(-7,10,15);
      light.castShadow = true;
      var d = 10;
      light.shadow.camera.left = - d;
      light.shadow.camera.right = d;
      light.shadow.camera.top = d;
      light.shadow.camera.bottom = - d;

      light.shadow.camera.near = 2;
      light.shadow.camera.far = 50;

      light.shadow.mapSize.x = 1024;
      light.shadow.mapSize.y = 1024;

      light.shadow.bias = -0.003;
      scene.add(light);

      // creating threex.domevents.js code
      const domEvents = new THREEx.DomEvents(camera, renderer.domElement);

      let cubeClicked = false;
      domEvents.addEventListener(cube, 'click', event =>{
        if(!cubeClicked){
          material.wireframe = false;
          cubeClicked = true;
        } else{
          material.wireframe = true;
          cubeClicked = false;
        };
      });

      domEvents.addEventListener(cube, 'mouseover', event =>{
        cube.scale.set(1.5,1.5,1.5);
      });

      domEvents.addEventListener(cube, 'mouseout', event =>{
        cube.scale.set(1,1,1);
      });
      // Creating controllers:

      controls = new THREE.OrbitControls(camera, renderer.domElement);
      controls.minDistance = 1;
      controls.maxDistance = 1000;

      // Creating a renderer or animate loop:

      function animate(){
        // this will create a loop that causes
        // the renderer to draw the scene every
        // time the screen is refreshed
        // (on a typical screen this means 60 times)
        requestAnimationFrame( animate );

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        controls.update();
        renderer.render(scene, camera);
      }
      animate();



