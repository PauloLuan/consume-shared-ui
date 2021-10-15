import { SharedUi } from '@pauloluan/shared-ui'

export default function Root(props) {
  return (
    <>
      <section>
        {props.name} Essa bagaceira velha funciona com styled components
      </section>
      <SharedUi />
    </>
  )
}
