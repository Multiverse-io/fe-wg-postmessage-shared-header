const headerRoot = document.getElementById('shared-header');


// This could either be a mini React app or a vanilla JS app relying on e.g. `createElement()`.
// `.innerHTML` is just for demonstration purposes.
headerRoot.innerHTML = `
  <div class="shared-header-menu-container">
    <img src="https://platform-staging.multiverse.io/images/logo_indigo_blue-6a7b01458dca70120f673966ec3df4ff.svg?vsn=d" class="shared-header-menu-logo">
    <div class="shared-header-menu-item">Candidates</div>
    <div class="shared-header-menu-item">Apprentices</div>
    <div class="shared-header-menu-item">Delivery</div>
    <div class="shared-header-menu-item">Admin</div>
  </div>
  <style>
  .shared-header-menu-container {
    display: flex;
    align-items: center;
    justify-content: right;

    height: 100px;
    padding: 20px;

    background-color: white;
    box-shadow: 0 2px 10px -2px #0000001a;

    font-family: "Atlas Grotesk Web", Helvetica, Arial, sans-serif
  }
  .shared-header-menu-logo {
    margin-top: -5px;
    margin-right: auto; /* Align to the left */

    width: 125px;
    height: 20px;

  }
  .shared-header-menu-item {
    padding-left: 10px;
  }
  </style>
`;
