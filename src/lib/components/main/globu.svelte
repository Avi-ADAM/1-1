<script>
    import {spring } from 'svelte/motion'
  import { Group } from 'three'
  import { useTask, T } from '@threlte/core'
  import { useGltf, Text } from '@threlte/extras'
  import { interactivity } from '@threlte/extras'
  interactivity()
  /**
   * @typedef {Object} Props
   * @property {() => void} [onSubmit] - Callback for when the component submits.
   */

  /** @type {Props} */
  let { en = false, onSubmit, fallback, error, children, onClick = () => {} } = $props()
  let ref = $state(null)

  console.log('globu',en)

  const gltf = useGltf('3d/withlev.glb')

   let rotationt = $state(0)
		let isHovering = $state(false), isPointerDown = $state(false)
  let poz = $state({z:0, y:0, x:0});
  let obPoz = {z:0, y:0, x:0}
 let boll = $state(false)
 let bool = $state(false)
 const texter = spring(1)
 useTask(() => {

  if(isHovering == false){

	!en ? rotationt += 0.01 : rotationt -= 0.01
      texter.set(1)

  } else{
    rotationt = 0
    texter.set(1.3)
  }
})
function sub (){
    console.log("click")
    onSubmit?.()
}
</script>
<T.PerspectiveCamera makeDefaulte position={[ 0, 0 ,25]} fov={24}/>
<T.AmbientLight   intensity={0.61} />

<T.SpotLight position={poz} />

<T.DirectionalLight  intensity={0.81} position={[ -20,  -5, 5 ]} />
<T.DirectionalLight  intensity={0.91} position={[0, 10, 10 ]} />
<T dispose={false}>
  {#await gltf}
    {@render fallback?.()}
  {:then gltf}
        <T.Group bind:ref={ref} interactive={true} rotation={[0, rotationt, 0]} onpointerenter={() => (isHovering = true)}
onpointerleave={() => {
  isPointerDown = false
  isHovering = false
}}
onpointerdown={() => (isPointerDown = true)}
onpointerup={() => (isPointerDown = false)}
onpointercancel={() => {
  isPointerDown = false
  isHovering = false
}}
onclick={sub} >
<T.AmbientLight   intensity={0.61} />

<T.SpotLight position={poz} />

<T.DirectionalLight  intensity={0.81} position={[-0.4, 0.1, 3.2]} />
<T.DirectionalLight  intensity={0.91} position={{ y: 10, z: 10 }} />
    <T.Group position={[-0.4, 0.1, 3.2]} scale={0.005} rotation={[0, 0, 0]}>
     {#if en === false}
        <T.Group scale={$texter} >
        <T.Mesh
        castShadow receiveShadow
          geometry={gltf.nodes.mesh_id99.geometry}
          material={gltf.materials['90']}         
        />
      <T.Mesh
      castShadow receiveShadow
        geometry={gltf.nodes.node_id118.geometry}
        material={gltf.materials['85']}
        scale={6}
        rotation={[0, 0, 0]}
        position={[-4.4, 7, 8.2]}
      />
      </T.Group>
      {/if}
      {#if en === true}
        <Text
          text="click for freedom"
          fontSize={85}
          color="#FF0092"
          anchorX="center"
          anchorY="middle"
          position={[100, 0, 0]}
          scale={$texter}
          rotation={[0, 0, 0]}
            outlineWidth={10}
          outlineColor="#000000"
        />
      {/if}
    </T.Group>
  
    <T.Mesh
    castShadow receiveShadow
      geometry={gltf.nodes.node_id74.geometry}
      material={gltf.materials['70']}
      position={[-0.2, -2.19, 0.21]}
      rotation={[0.34, 0, -0.16]}
      scale={0.22}
    />
  </T.Group  >

  {:catch error}
    {@render error?.({ error: err })}
  {/await}

  {@render children?.({ ref })}
</T>
