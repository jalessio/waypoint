import { productName, productSlug } from 'data/metadata'
import order from 'data/plugins-navigation.js'
import DocsPage from '@hashicorp/react-docs-page'
import {
  generateStaticPaths,
  generateStaticProps,
} from '@hashicorp/react-docs-page/server'

const subpath = 'plugins'

function PluginsLayout(props) {
  return (
    <DocsPage
      product={{ name: productName, slug: productSlug }}
      subpath={subpath}
      order={order}
      staticProps={props}
    />
  )
}

export async function getStaticPaths() {
  return generateStaticPaths(subpath)
}

export async function getStaticProps({ params }) {
  return generateStaticProps(subpath, productName, params)
}

export default PluginsLayout
