// Minimale service worker, alleen om de app installeerbaar te maken
// ("Toevoegen aan beginscherm"). Doet BEWUST niets anders dan elk verzoek
// gewoon doorlaten naar het netwerk — geen offline-cache, dus elke keer dat
// je de app opent, krijg je gegarandeerd de nieuwste versie. Dat is
// expres: een verkeerd gecachete oude versie zou precies het soort
// instabiliteit kunnen veroorzaken die we net hebben opgelost.
self.addEventListener("fetch", function (event) {
  event.respondWith(fetch(event.request));
});
