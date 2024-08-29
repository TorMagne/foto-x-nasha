<template>
  <main class="container px-4 mx-auto my-16">
    <!-- intro -->
    <section>
      <div class="hero rounded-md bg-zinc-700 p-6 shadow-md block">
        <div class="hero-content text-center border max-w-5xl mx-auto m-10">
          <div class="p-10 text-white">
            <h1 class="mb-4 font-Raleway text-2xl md:text-3xl font-bold">Foto X Skjelstadås</h1>
            <h2 class="font-Raleway text-4xl md:text-5xl font-bold">
              ta kontakt for en uforpliktende prat!
            </h2>
          </div>
        </div>
      </div>
    </section>

    <!-- møt fotografen -->
    <section
      class="mt-10 grid grid-cols-1 place-content-between gap-8 bg-zinc-700 p-6 text-white md:mt-32 md:grid-cols-2 rounded-md"
    >
      <div class="avatar">
        <div class="w-full rounded">
          <img src="~/assets/images/omfotox.jpg" alt="partner image" />
        </div>
      </div>

      <div class="mb-6 flex flex-col justify-center md:mb-0 md:mx-10 text-center">
        <h2 class="mb-6 font-Raleway text-lg font-bold md:text-3xl">
          Bestill Foto X sine tjenester, Booke Time?
        </h2>
        <p class="mb-4 font-Libre">Dette gjør du ved og ta kontakt på, E-post / Tlf</p>
        <h3 class="font-Raleway mb-4 font-bold text-xl">Tilgjengelig i tidene:</h3>
        <ul>
          <li class="mb-4"><span class="font-bold">Man-Tor:</span> kl. 08:00 - 16:00</li>
          <li class="mb-4"><span class="font-bold">Fre:</span> kl. 08:00 - 16:00</li>
          <li class="mb-4"><span class="font-bold">Lør:</span> åpen etter avtale</li>
        </ul>
        <h3 class="font-Raleway font-bold text-xl mb-4">Søndag stengt</h3>
        <h3 class="font-Raleway font-bold text-xl mb-4">Addresse</h3>
        <address class="mb-4">åsvangvegen 1, 7049 Trondheim</address>
        <h3 class="font-Raleway font-bold text-xl mb-4">Kontakt</h3>
        <div><span class="mr-2">Tlf:</span><a href="tel:+4798465904">98465904</a></div>
        <div>
          <span class="mr-2">E-post:</span
          ><a href="mailto:foto_x_skjelstadas@hotmail.com">foto_x_skjelstadas@hotmail.com</a>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
useHead({
  title: 'Foto X Skjelstadås | Kontakt',
  meta: [
    {
      name: 'description',
      content:
        'Kontakt Foto X Skjelstadås i Trondheim for å bestille fotograferingstjenester eller for en uforpliktende prat. Tilgjengelig mandag til lørdag, spesialist i naturlig lys og kunstfotografi. Ta kontakt via e-post eller telefon for å avtale en tid.',
    },
    {
      name: 'keywords',
      content:
        'Kontakt Foto X, Skjelstadås, Trondheim, Fotograferingstjenester, Bestill time, Kunstfotografi, Naturlig lys, Fotokunst, E-post, Telefon, Booke fotograf, Moholt, Foto X kontakt',
    },
  ],
});
</script>
