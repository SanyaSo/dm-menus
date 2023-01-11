<template>
  <div class="dom-header-mobile-menu">
    <span class="icon-menu_left_right"></span>
    <dom-header-menu-modal ref="menumodal">
      <dom-header-menu-modal-user-name :user-name="userName" />
      <dom-header-menu-modal-list :menus="menus" />

      <template #footer>
        <dom-header-menu-modal-link-list :links="links" />
      </template>
    </dom-header-menu-modal>
  </div>
</template>

<script>
import DomHeaderMenuModal from "./domHeaderMenuModal/DomHeaderMenuModal.vue";
import DomHeaderMenuModalUserName from "./domHeaderMenuModal/DomHeaderMenuModalUserName.vue";
import DomHeaderMenuModalList from "./domHeaderMenuModal/DomHeaderMenuModalList.vue";
import DomHeaderMenuModalLinkList from "./domHeaderMenuModal/DomHeaderMenuModalLinkList.vue";
export default {
  components: {
    DomHeaderMenuModal,
    DomHeaderMenuModalUserName,
    DomHeaderMenuModalList,
    DomHeaderMenuModalLinkList,
  },
};
</script>

<style></style>
