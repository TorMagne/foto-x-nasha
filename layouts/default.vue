<template>
  <nav class="text-font-Raleway">
    <div class="drawer drawer-end">
      <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col min-h-screen">
        <!-- Navbar -->
        <div class="navbar h-[100px] w-full bg-[#0f171d]">
          <div class="container mx-auto px-4">
            <div class="mx-2 flex-1 text-3xl font-bold">
              <NuxtLink to="/" class="font-Raleway tracking-wide text-white">
                Foto X Skjelstadås
              </NuxtLink>
            </div>

            <div class="hidden flex-none lg:block">
              <ul class="font-Raleway menu menu-horizontal font-bold">
                <!-- Navbar menu content here -->
                <!-- Sidebar content here -->
                <li class="nav-link text-gray-500 hover:text-white">
                  <NuxtLink to="/">FORSIDE</NuxtLink>
                </li>
                <li class="nav-link text-gray-500 hover:text-white">
                  <NuxtLink to="/prices">PRISER</NuxtLink>
                </li>
                <li class="nav-link text-gray-500 hover:text-white">
                  <NuxtLink to="/contact">KONTAKT</NuxtLink>
                </li>
                <li class="nav-link text-gray-500 hover:text-white">
                  <NuxtLink to="/about">OM FOTO X</NuxtLink>
                </li>

                <li class="text-gray-500 hover:text-white hidden">
                  <details>
                    <summary>PRODUKTER</summary>
                    <ul class="rounded-t-none bg-base-100 p-2">
                      <li class="text-gray-500 hover:text-white">
                        <NuxtLink to="/">Kunst prosjekter</NuxtLink>
                      </li>
                      <li class="text-gray-500 hover:text-white">
                        <NuxtLink to="/">Foto sjangere</NuxtLink>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </div>
            <div class="flex-none lg:hidden">
              <label for="my-drawer-3" aria-label="open sidebar" class="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="inline-block h-6 w-6 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
          </div>
        </div>
        <!-- Page content here -->
        <slot />
        <Footer />
      </div>
      <div class="drawer-side">
        <label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label>
        <ul class="menu min-h-full w-80 bg-base-200 p-4">
          <!-- Sidebar content here -->
          <!-- Sidebar content here -->
          <li class="nav-link text-gray-500 hover:text-white">
            <NuxtLink to="/">FORSIDE</NuxtLink>
          </li>
          <li class="nav-link text-gray-500 hover:text-white">
            <NuxtLink to="/prices">PRISER</NuxtLink>
          </li>
          <li class="nav-link text-gray-500 hover:text-white">
            <NuxtLink to="/contact">KONTAKT</NuxtLink>
          </li>
          <li class="nav-link text-gray-500 hover:text-white">
            <NuxtLink to="/about">OM FOTO X</NuxtLink>
          </li>
          <li class="text-gray-500 hover:text-white hidden">
            <details>
              <summary>PRODUKTER</summary>
              <ul class="rounded-t-none bg-base-100 p-2">
                <li class="text-gray-500 hover:text-white">
                  <NuxtLink to="/">Kunst prosjekter</NuxtLink>
                </li>
                <li class="text-gray-500 hover:text-white">
                  <NuxtLink to="/">Foto sjangere</NuxtLink>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.nav-link .router-link-exact-active {
  color: white;
}
</style>
