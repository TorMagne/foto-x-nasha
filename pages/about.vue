<template>
  <main class="container px-4 mx-auto my-16">
    <!-- intro -->
    <section>
      <div class="hero rounded-md bg-zinc-700 p-6 shadow-md block">
        <div class="hero-content text-center border max-w-2xl mx-auto m-10">
          <div class="p-10 text-white">
            <h1 class="mb-4 font-Raleway text-3xl font-bold">Les min Foto historie</h1>
            <h2 class="font-Raleway text-5xl font-bold">Foto X</h2>
          </div>
        </div>
      </div>
    </section>

    <!-- møt fotografen -->
    <section class="text-white md:mt-16">
      <h2 class="font-Raleway my-6 text-xl">Møt fotografen:</h2>
      <h2 class="font-Raleway mb-6 text-4xl">Ina Skjelstadås</h2>

      <div class="md:flex">
        <div>
          <img src="~/assets/images/nasha.jpeg" alt="Profil bilde av Ina Skjelstadås" />
        </div>

        <div class="md:ml-10 xl:ml-14">
          <div class="my-8 md:mt-0">
            <h2 class="font-Raleway mb-4 font-bold">2006 - EN IDÉ ER FØDT</h2>
            <p class="font-Libre">
              Jeg 13 år, nylig begynt på ungdomsskolen og lette etter min vei inn i den voksne
              verden. jeg var alltid den litt nerdete rare einstøingen som snakket for mye og gjerne
              om ting ingen forsto. jeg hadde gode karakterer i kunst og håndverk og sløyd, å følte
              meg selv som kunstner.
            </p>
          </div>

          <div class="my-8">
            <h2 class="font-Raleway mb-4 font-bold">
              2013/2014 - Medier og kommunikasjon VG1 og Vg2
            </h2>
            <p class="mb-2 font-Libre">
              Startet en reise for og nå drømmen om og bli fotograf. på Meldal videregående skole,
              med Marit Mjøen som kontaktlærer.
            </p>
            <p class="font-Libre">
              jeg var alltid ferdig med oppgavene før alle andre og fikk ofte ekstra oppgaver bare
              for å ha noe og gjøre mens jeg ventet. Etter Vg 2 var det vanskelig og nesten umulig
              og finne lærlingplass som fotograf , så jeg valgte derfor og gå et tredje år på VGS
              men, linjen jeg skulle gå ble lagt ned og jeg var gravid med mitt andre barn, og fikk
              mamma permisjon fra studiet.
            </p>
          </div>

          <div class="my-8">
            <h2 class="font-Raleway mb-4 font-bold">2019/2020 -Studiespesialisering VG3</h2>
            <p class="font-Libre">
              For og få fullført min utdannelse og få mulighet til videre utdanning tok jeg
              Studiespesialisering, påbygg.. sommeren 2020 skulle jeg ha eksamen men corona kom og
              eksamen ble avlyst. som alenemor til mine barn ble det en vanskelig tid som heldig vis
              gikk over.
            </p>
          </div>
        </div>
      </div>

      <div class="md:flex md:mt-16">
        <div class="md:mr-10 xl:mr-14">
          <div class="my-8">
            <h2 class="font-Raleway mb-4 font-bold">2021 -Begynte på drømmestudiet!</h2>
            <p class="font-Libre">
              kom meg inn på drømme utdanningen. kunstfotografi ved Norsk fotofagskone og har elsket
              hver dag, hvert øyeblikk og skulle ønske den aldri tok slutt. var som og være på ferie
              hver dag.
            </p>
          </div>

          <div class="my-8">
            <h2 class="font-Raleway mb-4 font-bold">
              2021 -startet min reise som Næringsdrivende!
            </h2>
            <p class="font-Libre">
              Jeg var ivrig og satte igang, utfordringene har kommet i hopetall men til tross for
              dette ga jeg ikke opp og elsker jobben min!
            </p>
          </div>

          <div class="my-8">
            <h2 class="font-Raleway mb-4 font-bold">2023-Endret bedriften navn!</h2>
            <p class="font-Libre">
              Bedriftens første navn var Tashakunstfoto, noe jeg innså i 2023 var et navn som ble
              misforstått, derfor ente jeg opp med og endre navnet til Foto X skjelstadås. Jeg ble
              inspirert av X-man filmene, og det nye navnet passer til den fotografiske stilen min.
            </p>
          </div>

          <div class="my-8">
            <h2 class="font-Raleway mb-4 font-bold">2023 - Ut eksaminert ved Norsk fotofagskole</h2>
            <p class="font-Libre">
              Med vitnemålet i Kunstfotografi i boks var valget lett! Eventyret som fotograf
              fortsetter.
            </p>
          </div>

          <div class="border-l-4 border-spacing-x-5 my-8">
            <blockquote class="font-Raleway mb-4 font-bold ml-6">
              2023-2026 : Studerer jeg Bachelor på DMMH i Trondheim for og bli Barnehagelærer med
              fordypning i kunst pedagogikk.
            </blockquote>
          </div>
        </div>

        <div class="my-8">
          <img src="~/assets/images/diplom.jpg" alt="" />
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
useHead({
  title: 'Foto X Skjelstadås | Om Foto X',
  meta: [
    {
      name: 'description',
      content:
        'Oppdag historien bak Foto X og fotograf Ina Skjelstadås. Fra barndommens inspirasjon til utdanning ved Norsk Fotofagskole, og reisen til å starte egen virksomhet. Les om hvordan lidenskapen for kunstfotografi har formet hennes unike stil og kreative reise.',
    },
    {
      name: 'keywords',
      content:
        'Foto X, Om Foto X, Ina Skjelstadås, Kunstfotografi, Norsk Fotofagskole, Fotografens historie,Kunstfotograf, Kreativ reise, Fotokunst, Fotograf Trondheim, Tashakunstfoto, Fotoutdanning, Fotograf karriere',
    },
  ],
});
</script>
