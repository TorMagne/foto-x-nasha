<template>
  <main class="container px-4 mx-auto my-16">
    <section>
      <div class="hero hidden rounded-md bg-zinc-700 p-6 shadow-md md:block">
        <div class="hero-content max-w-max flex-col justify-between lg:flex-row-reverse">
          <img src="~/assets/images/priserbg.jpg" class="max-w-sm rounded-md shadow-2xl" />
          <div class="text-white md:mr-10">
            <h1 class="mb-4 font-Raleway text-5xl font-bold">Prisoversikt</h1>
            <p class="py-6 font-Libre">
              Utforsk våre fotograferingstjenester med priser for portrett-, familie-, og
              bedriftsfotografering. Vi tilbyr også spesialpakker som signaturportrett.
            </p>
            <p class="pb-6 font-Libre">
              Ta gjerne kontakt for et skreddersydd pristilbud som passer dine behov!
            </p>

            <NuxtLink
              to="/contact"
              class="btn rounded-md border-white bg-transparent font-Raleway text-white duration-300 ease-in-out hover:bg-white hover:text-black"
            >
              Kontakt
            </NuxtLink>
          </div>
        </div>
      </div>

      <div class="hero bg-transparent md:hidden">
        <img class="h-full object-cover" src="~/assets/images/priserbg.jpg" />
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md text-white">
            <h1 class="mb-5 font-Raleway text-5xl font-bold">Prisoversikt</h1>
            <p class="mb-5 text-center font-Libre">
              Utforsk våre fotograferingstjenester med priser for portrett-, familie-, og
              bedriftsfotografering. Vi tilbyr også spesialpakker som signaturportrett.
            </p>
            <p class="mb-5 text-center font-Libre">
              Ta gjerne kontakt for et skreddersydd pristilbud som passer dine behov!
            </p>
            <NuxtLink
              to="/contact"
              class="btn rounded-md border-white bg-transparent font-Raleway text-white duration-300 ease-in-out hover:bg-white hover:text-black"
            >
              Kontakt
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <div class="p-6 mb-8 mt-10 md:mt-32">
      <h2 class="text-2xl font-semibold mb-4 text-white font-Raleway">Gavekort</h2>
      <p class="mb-4 font-Libre">
        <span class="font-bold">Kr 150</span>
        Du betaler for ønsket fotoshoot / evt visningstime/ bilde kjøp, i tillegg til prisen for
        gavekortet. Ordn efter avtale, ta kontakt!
      </p>
      <div class="divider divider-white"></div>
    </div>

    <div class="p-6 mb-8">
      <h2 class="text-2xl font-semibold mb-4 text-white font-Raleway">Visningstime</h2>
      <p class="mb-4 font-Libre">
        <span class="font-bold">Kr 250</span> - Visningstime ca 30 minutter
      </p>
      <div class="divider divider-white"></div>
    </div>

    <div class="p-6 mb-8">
      <h2 class="text-2xl font-semibold mb-4 text-white font-Raleway">Portrett fotografering</h2>
      <p class="mb-4 font-Libre">
        <span class="font-bold">Kr 500</span> - Portrett fotografering 30 minutter, pris for 1 time
        er 1000,-
      </p>
      <div class="divider divider-white"></div>
    </div>

    <div class="p-6 mb-8">
      <h2 class="text-2xl font-semibold mb-4 text-white font-Raleway">
        Venne/kjæreste fotografering
      </h2>
      <p class="mb-4 font-Libre">
        <span class="font-bold">Kr 1000</span> - Venne/kjæreste fotografering per time
      </p>
      <div class="divider divider-white"></div>
    </div>

    <div class="p-6 mb-8">
      <h2 class="text-2xl font-semibold mb-4 text-white font-Raleway">
        1 års fotografering/ søsken
      </h2>
      <p class="mb-4 font-Libre">
        <span class="font-bold">Kr 1500</span> - 1 års fotografering/ søsken per time
      </p>
      <div class="divider divider-white"></div>
    </div>

    <div class="p-6 mb-8">
      <h2 class="text-2xl font-semibold mb-4 text-white font-Raleway">Familie fotografering</h2>
      <p class="mb-4 font-Libre">
        <span class="font-bold">Kr 1800</span> - Familie fotografering per time
      </p>
      <div class="divider divider-white"></div>
    </div>

    <div class="p-6 mb-8">
      <h2 class="text-2xl font-semibold mb-4 text-white font-Raleway">
        Gravid/ Mor og barn fotografering
      </h2>
      <p class="mb-4 font-Libre">
        <span class="font-bold">Kr 2000</span> - Gravid/ Mor og barn fotografering per time
      </p>
      <div class="divider divider-white"></div>
    </div>

    <div class="p-6 mb-8">
      <h2 class="text-2xl font-semibold mb-4 text-white font-Raleway">
        Bedrift portrett fotografering
      </h2>
      <p class="mb-4 font-Libre">
        <span class="font-bold">Kr 2000</span> - Bedrift portrett fotografering i studio per time
      </p>
      <div class="divider divider-white"></div>
    </div>

    <div class="p-6 mb-8">
      <h2 class="text-2xl font-semibold mb-4 text-white font-Raleway">Produktbilder</h2>
      <p class="mb-4 font-Libre"><span class="font-bold">Kr 2500</span> - Produktbilder per time</p>
      <div class="divider divider-white"></div>
    </div>

    <div class="p-6 mb-8">
      <h2 class="text-2xl font-semibold mb-4 text-white font-Raleway">
        Foto oppdrag for næringslivet
      </h2>
      <p class="mb-4 font-Libre">
        <span class="font-bold">Kr 3000</span> - Foto oppdrag for næringslivet per time
      </p>
      <div class="divider divider-white"></div>
    </div>

    <div class="p-6 mb-8">
      <h2 class="text-2xl font-semibold mb-4 text-white font-Raleway">Band/Artist fotoshoot</h2>
      <p class="mb-4 font-Libre">
        <span class="font-bold">Kr 3000</span> - Band/Artist fotoshoot per time
      </p>
      <div class="divider divider-white"></div>
    </div>

    <div class="p-6 mb-8">
      <h2 class="text-2xl font-semibold mb-4 text-white font-Raleway">Bryllup</h2>
      <p class="mb-4 font-Libre">Ta kontakt for pristilbud!</p>
      <div class="divider divider-white"></div>
    </div>

    <div class="p-6 mb-8">
      <h2 class="text-2xl font-semibold mb-4 text-white font-Raleway">Konfirmasjon</h2>
      <p class="mb-4 font-Libre">Ta kontakt for pristilbud!</p>
      <div class="divider divider-white"></div>
    </div>

    <div class="p-6 mb-8">
      <h2 class="text-2xl font-semibold mb-4 text-white font-Raleway">Dåp</h2>
      <p class="mb-4 font-Libre">Ta kontakt for prisoverslag!</p>
      <div class="divider divider-white"></div>
    </div>

    <div class="p-6 mb-8">
      <h2 class="text-2xl font-semibold mb-4 text-white font-Raleway">
        Foto x Skjelstadås Privat Signatur Portrett
      </h2>
      <p class="mb-4 font-Libre">
        Fotografering og planlegging over flere timer inkluderer ett stort vegg bilde på (297 mm x
        120 mm). <span class="font-bold">Kr 20 000,-</span> inkludert planleggingstime i forkant av
        fotograferingen på location eller studio, presentasjon av resultatet. Hjemme levering.
        Passer for portretter/familier/AKT foto .m.m.
      </p>
      <p class="mb-4 font-Libre">
        Ønskes flere bilder og/eller produkter, kan de kjøpes etter prisliste med 10 % rabatt om de
        kjøpes på visningstimen.
      </p>
      <div class="divider divider-white"></div>
    </div>

    <div class="p-6 mb-8">
      <h2 class="text-2xl font-semibold mb-4 text-white font-Raleway">
        Tilleggspriser for Studio Fotoshoot
      </h2>
      <p class="mb-4 font-Libre">
        <span class="font-bold">Kr 500</span> - 1 kleskift under fotoshoot (10 min ekstra)
      </p>
      <p class="mb-4 font-Libre">
        <span class="font-bold">Kr 500</span> - Styling før fotoshoot per person (10 min ekstra)
      </p>
      <div class="divider divider-white"></div>
    </div>

    <div class="p-6 mb-8">
      <h2 class="text-2xl font-semibold mb-4 text-white font-Raleway">Location Fotoshoot</h2>
      <p class="mb-4 font-Libre">Kontakt oss for pristilbud!</p>
      <p class="mb-4 font-Libre">
        <span class="font-bold">Kr 500</span> - 1 kleskift under fotoshoot (10 min ekstra)
      </p>
      <p class="mb-4 font-Libre">
        <span class="font-bold">Kr 500</span> - Styling før fotoshoot per person (10 min ekstra)
      </p>
      <p class="mb-4 font-Libre">
        Her kommer reiseavstand og utgifter til reise, mat m.m. i tillegg.
      </p>
      <div class="divider divider-white"></div>
    </div>

    <div class="p-6 mb-8">
      <h2 class="text-2xl font-semibold mb-4 text-white font-Raleway">Bildepriser</h2>
      <p class="mb-4 font-Libre">
        <span class="font-bold">Kr 180</span> - 1 bilde på 72 dpi (egner seg kun til sosiale
        medier/små bilder)
      </p>
      <p class="mb-4 font-Libre">
        <span class="font-bold">Kr 600</span> - 1 digital foto fil på 250 dpi (egner seg ikke til
        print)
      </p>
      <p class="mb-4 font-Libre">
        <span class="font-bold">Kr 600</span> - 1 foto print uten ramme A4
      </p>
      <p class="mb-4 font-Libre">
        <span class="font-bold">Kr 1500</span> - 1 foto print uten ramme A3
      </p>
      <p class="mb-4 font-Libre">
        <span class="font-bold">Kr 5000</span> - 1 foto print uten ramme A3+
      </p>
      <p class="mb-4 font-Libre">
        <span class="font-bold">Kr 5000</span> - 1 Fotobok håndlaget (Ta kontakt for egen pris)
      </p>
      <p class="mt-4 font-Libre">
        Alle bilder kan tilpasses etter ønsket Ramme str, men da med et tillegg i prisen på 250,-
      </p>
      <p class="mt-4 font-Libre">
        Alle bilder blir printet med høykvalitets fotopapir. Glossy eller matt bestemmes av kunden
        på visningstime.
      </p>
      <p class="mt-4 font-Libre">For matt fotopapir er det et tillegg på 200,-</p>
      <p class="mt-4 font-Libre">
        Bilde på læret kan ordnes men da etter egen avtale og prisen øker da betraktelig.
      </p>
      <p class="mt-4 font-Libre">
        Har du ikke egen bilderamme kan vi ordne det for deg mot et tillegg i prisen etter avtale.
      </p>
      <div class="divider divider-white"></div>
    </div>

    <div class="p-6">
      <h2 class="text-2xl font-semibold mb-4 text-white font-Raleway">Viktig Informasjon</h2>
      <p class="mb-4 font-Libre">
        For ikke møtt til booket time blir det sendt ut en faktura på 50% av avtalt time! 24 timers
        varsel for avlysing av time eller for endring.
      </p>
      <p class="mb-4 font-Libre">
        Varen sendes mot at kunden betaler frakt! Varen kan hentes hos oss etter avtale!
      </p>
      <p class="mb-4 font-Libre">
        <span class="font-bold"
          >Bruksrett for digitale HQ bilder kan kjøpes for et tillegg på 16 000,-</span
        >
      </p>
      <p class="mb-4 font-Libre">
        Dette inkluderer alle ferdig redigerte digitale filer i høykvalitets oppløsning på inntil
        1000 dpi, fra fotoshoot tatt hos Foto x Skjelstadås (inkluderer ikke signatur portrett).
      </p>
      <div class="divider divider-white"></div>
    </div>
  </main>
</template>

<script setup>
useHead({
  title: 'Foto X Skjelstadås | Priser',
  meta: [
    {
      name: 'description',
      content:
        'Velkommen til Foto X! Utforsk vår prisoversikt og informasjon om våre fotoshoot-tjenester, inkludert portrettfotografering, familie- og bedriftsfotografering, samt spesialtilbud på signaturportrett. Ta kontakt for pristilbud og avtale!',
    },
    {
      name: 'keywords',
      content:
        'Foto X, fotografering, portrettfotografering, familiefotografering, bedriftsfotografering, signaturportrett, Foto x Skjelstadås, prisoversikt, priser, pristilbud, gavekort, visningstime, fotopakker, fotograferingstjenester',
    },
  ],
});
</script>
