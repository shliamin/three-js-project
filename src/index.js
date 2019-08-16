// all the code for js goes into here
      // scene
      // camera
      // renderer
      console.log('test');
      // setting up the scene:
      var scene = new THREE.Scene();
      // setting up the camera:
      // There are few different cameras in 3js. Let's use PerspectiveCamera
      // 75 is the field of view. (FOV). The value is in degrees.
      // The secons one is the aspect ratio.
      // 0.1 and 100 are the near and far clipping plane.
      var camera = new THREE.PerspectiveCamera(75, window.innerWidth/ window.innerHeight, 0.1, 100);
      // setting up the renderer:
      var renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      // we add the renderer element to our HTML document
      document.body.appendChild(renderer.domElement);

      //Let's add the cube now:

      // To create a cube we need a BoxGeometry. This is an object that contains all the points (vertices) and fill (faces) of the cube.
      var geometry = new THREE.BoxGeometry(1,1,1);
      // We need a material to color it. 3js comes with several materials, but we will stick to the MeshBasicMaterial for now. All materials take an object of properties which will be applied to them.
      var material = new There.MeshBasicMaterial({color: 0x00ff00});
      // We need a Mesh. This is an object that takes a geometry, and applies a material to it, which we can then insert to our scene, and move freely arround.
      var cube = new THREE.Mesh(geometry, material);
      // By default, when we call scene.add(), the thing we add will be added to the coordinates (0,0,0). This would cause both the camera and the cube to be inside each other. To avoid this, we simply move the camera out a bit.
      scene.add (cube);

      camera.position.z = 5;

      // Creating a renderer or animate loop:

      function animate(){
        // this will create a loop that causes
        // the renderer to draw the scene every
        // time the screen is refreshed
        // (on a typical screen this means 60 times per second).

        // requestAnimationFrame has a number of advantages.
        // Perhaps the most important one is that it pauses
        // when the user navigates to another browser tab,
        // hence not wasting their precious processing power and battery life.
        requestAnimationFrame( animate );
        renderer.render(scene, camera);
      }
      animate();

