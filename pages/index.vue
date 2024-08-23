<template>
  <main class="container mx-auto my-16 px-4">
    <section>
      <div class="hero hidden rounded-md bg-zinc-700 p-6 shadow-md md:block">
        <div class="hero-content max-w-max flex-col justify-between lg:flex-row-reverse">
          <img src="../assets/images/header.jpg" class="max-w-sm rounded-md shadow-2xl" />
          <div class="text-white md:mr-10">
            <h1 class="mb-4 font-Raleway text-5xl font-bold">Foto X</h1>
            <h2 class="font-Raleway text-3xl font-bold">Skjelstadås Fanger øyeblikket!</h2>
            <p class="py-6 text-justify font-Libre">
              Velkommen til Foto X, hvor hvert bilde forteller en unik historie fanget med lidenskap
              og dyktighet. Som spesialist innen maling med lys, skaper jeg kunstverk selv i
              utfordrende situasjoner, inspirert av min lidenskap og min utdanning ved Norsk
              Fotofagskole. La meg fange essensen av dine øyeblikk og skape bilder som inspirerer og
              berører. Kontakt Foto X i dag, og la oss sammen skape magi gjennom fotografiet.
            </p>
            <button
              class="btn rounded-md border-white bg-transparent font-Raleway text-white duration-300 ease-in-out hover:bg-white hover:text-black hidden"
            >
              Produkter
            </button>
            <a
              class="btn rounded-md border-white bg-transparent font-Raleway text-white duration-300 ease-in-out hover:bg-white hover:text-black"
              href="#lesmer"
            >
              Les mer
            </a>
          </div>
        </div>
      </div>

      <div class="hero bg-transparent md:hidden">
        <img src="../assets/images/header.jpg" alt="" />
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md text-white">
            <h1 class="mb-5 font-Raleway text-5xl font-bold">Foto X</h1>
            <h2 class="mb-4 font-Raleway text-3xl font-bold">Skjelstadås Fanger øyeblikket!</h2>
            <p class="mb-5 text-center font-Libre">
              Velkommen til Foto X, hvor hvert bilde forteller en unik historie fanget med lidenskap
              og dyktighet.
            </p>
            <button
              class="btn rounded-md border-white bg-transparent font-Raleway text-white duration-300 ease-in-out hover:bg-white hover:text-black hidden"
            >
              Produkter
            </button>
            <a
              class="btn rounded-md border-white bg-transparent font-Raleway text-white duration-300 ease-in-out hover:bg-white hover:text-black"
              href="#lesmer"
            >
              Les mer
            </a>
          </div>
        </div>
      </div>
    </section>

    <section
      class="mt-10 grid grid-cols-1 place-content-between gap-8 text-white md:mt-32 md:grid-cols-2"
      id="lesmer"
    >
      <div class="mb-6 md:mb-0">
        <h2 class="mb-6 font-Raleway text-lg font-bold md:text-3xl">Hva gjør Foto X, Unik?</h2>
        <p class="mb-4 font-Libre">
          Som fotograf har jeg spesialisert meg i teknikken maling med lys. Jeg foretrekker å jobbe
          med naturlig lys eller maling med lys i stedet for å bruke blitz, noe som gjør at bildene
          mine skiller seg ut med sin naturlige skjønnhet og stemning.
        </p>
        <p class="mb-4 font-Libre">
          Min utdannelse har rustet meg med den nødvendige kunnskapen og ferdighetene til å skape
          kunstverk av høy kvalitet som du virkelig fortjener.
        </p>
        <NuxtLink
          to="/about"
          class="btn rounded-md border-white bg-transparent font-Raleway text-white duration-300 ease-in-out hover:border-black hover:bg-white hover:text-black"
        >
          Om foto X
        </NuxtLink>
      </div>

      <div class="avatar">
        <div class="ml-auto w-full rounded md:w-[450px]">
          <img src="../assets/images/omfotoxhomepage.jpg" alt="partner image" />
        </div>
      </div>
    </section>

    <section
      class="mt-10 grid grid-cols-1 place-content-between gap-8 bg-zinc-700 p-6 text-white md:mt-32 md:grid-cols-2"
    >
      <div class="avatar">
        <div class="w-full rounded md:w-[450px]">
          <img src="../assets/images/omfotox.jpg" alt="partner image" />
        </div>
      </div>

      <div class="mb-6 flex flex-col items-start justify-center md:mb-0">
        <h2 class="mb-6 font-Raleway text-lg font-bold md:text-3xl">Ina Skjelstadås</h2>
        <p class="mb-4 font-Libre">
          Jeg har høyere fagskole grad i kunstfotografi ved Norsk Fotofagskole, og startet å ta
          bilder allerede som barn. vokste opp med en far som, var veldig gla i analogt fotografi og
          lærte tidlig om foto gjennom hans interesse.
        </p>
        <p class="mb-4 font-Libre">
          når jeg var 13 år innså jeg at dette var det jeg ville bli når jeg ble stor. i dag jobber
          jeg som fotograf i eget firma. og ser fram til og ta bilde av deg og dine.
        </p>
        <NuxtLink
          to="/about"
          class="btn rounded-md border-white bg-transparent font-Raleway text-white duration-300 ease-in-out hover:border-black hover:bg-white hover:text-black"
        >
          Kontakt
        </NuxtLink>
      </div>
    </section>
  </main>
</template>

<script setup>
useHead({
  meta: [
    {
      name: 'description',
      content:
        'Welcome to Foto X, where every picture captures the moment with passion and skill. Specializing in natural light and "painting with light," Ina Skjelstadås creates unique artworks inspired by her education at the Norwegian School of Photography. Discover the magic of professional photography with Foto X – contact us today to capture your unforgettable moments.',
    },
    {
      name: 'keywords',
      content:
        'Foto X, Fotografi, Skjelstadås, Kunstfotografi, Naturlig lys, Maling med lys, Norsk Fotofagskole, Profesjonell fotograf, Unike bilder, Øyeblikksfotografi, Fotograf tjenester, Kunstverk, Foto magi, Kontakt fotograf, Fotokunst',
    },
  ],
  htmlAttrs: {
    class: 'scroll-smooth',
  },
});
</script>
