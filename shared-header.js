const headerRoot = document.getElementById('shared-header');


// This could either be a mini React app or a vanilla JS app relying on e.g. `createElement()`.
// `.innerHTML` is just for demonstration purposes.
function displayState(state) {
  const logo = `<img src="https://platform-staging.multiverse.io/images/logo_indigo_blue-6a7b01458dca70120f673966ec3df4ff.svg?vsn=d" class="shared-header-menu-logo">`;
  const links = `
      <div class="shared-header-menu-item">Candidates</div>
      <div class="shared-header-menu-item">Apprentices</div>
      <div class="shared-header-menu-item">Delivery</div>
      <div class="shared-header-menu-item">Admin</div>
  `;

  let menu
  if (state == 'default') {
    menu = `
      ${logo}
      ${links}
    `;
  } else if (state == 'backButton') {
    menu = `
      <a href="/" class="shared-header-menu-back">🔙</a>
    `;
  }

  headerRoot.innerHTML = `
    <div class="shared-header-menu-container">
      ${menu}
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
    .shared-header-menu-back {
      margin-right: auto; /* Align to the left */
      font-size: 26px;
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
}

window.addEventListener(
  'message',
  (event) => {
    // if (event.origin !== "http://example.org:8080") return;
    if (event.data === 'headerSetDefault') {
      displayState('default');
    } else if (event.data === 'headerSetBackButton') {
      displayState('backButton');
    }
  },
  false
);

displayState('default');
