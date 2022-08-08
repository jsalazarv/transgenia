import { DirectiveFunction } from "vue";

const layout: DirectiveFunction = (el, binding, vnode) => {
  if (
    vnode.context &&
    vnode.context.$store.state.app.layout !== binding.value
  ) {
    vnode.context.$store.commit("app/SET_LAYOUT", binding.value);
  }
};

export default layout;
