import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// create dodecahedron
const dodecahedronGeometry = new THREE.DodecahedronGeometry( 1 );
const dodecahedronMaterial = new THREE.MeshBasicMaterial( { color: 0x21fcff} );
const dodecahedron = new THREE.Mesh( dodecahedronGeometry, dodecahedronMaterial );
scene.add( dodecahedron );

const dodecahedronEdges = new THREE.EdgesGeometry( dodecahedronGeometry );
const dodecahedronEdgesMaterial = new THREE.LineBasicMaterial( { color: 0x000000 } );
const dodecahedronWireframe = new THREE.LineSegments( dodecahedronEdges, dodecahedronEdgesMaterial );
dodecahedron.add( dodecahedronWireframe );

// create icosahedron
const icosahedronGeometry = new THREE.IcosahedronGeometry( 1 );
const icosahedronMaterial = new THREE.MeshBasicMaterial( { color: 0xf407ff } );
const icosahedron = new THREE.Mesh( icosahedronGeometry, icosahedronMaterial );
icosahedron.position.x = 3;
scene.add( icosahedron );

const icosahedronEdges = new THREE.EdgesGeometry( icosahedronGeometry );
const icosahedronEdgesMaterial = new THREE.LineBasicMaterial( { color: 0x000000 } );
const icosahedronWireframe = new THREE.LineSegments( icosahedronEdges, icosahedronEdgesMaterial );
icosahedron.add( icosahedronWireframe );

// create tetrahedron
const tetrahedronGeometry = new THREE.TetrahedronGeometry( 1 );
const tetrahedronMaterial = new THREE.MeshBasicMaterial( { color: 0x0000ff } );
const tetrahedron = new THREE.Mesh( tetrahedronGeometry, tetrahedronMaterial );
tetrahedron.position.x = -3;
scene.add( tetrahedron );

const tetrahedronEdges = new THREE.EdgesGeometry( tetrahedronGeometry );
const tetrahedronEdgesMaterial = new THREE.LineBasicMaterial( { color: 0x000000 } );
const tetrahedronWireframe = new THREE.LineSegments( tetrahedronEdges, tetrahedronEdgesMaterial );
tetrahedron.add( tetrahedronWireframe );

camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );

	dodecahedron.rotation.x += 0.01;
	dodecahedron.rotation.y += 0.01;

	icosahedron.rotation.x -= 0.01;
	icosahedron.rotation.y -= 0.01;

	tetrahedron.rotation.x += 0.01;
	tetrahedron.rotation.y -= 0.01;

	renderer.render( scene, camera );
}

animate();
