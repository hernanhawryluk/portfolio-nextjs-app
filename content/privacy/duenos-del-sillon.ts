import type { LegalDocument } from "@/lib/types";

const duenosDelSillon: LegalDocument = {
  slug: "duenos-del-sillon",
  appName: "Dueños del sillón",
  lastUpdated: "2026-11-09",
  content: {
    en: {
      title: "Privacy Policy",
      intro: [
        "Dueños del sillón is a card game for Android made by Hernán Hawryluk. This policy explains what happens to your data when you play. The short version: the game doesn’t collect your data or send it anywhere.",
      ],
      sections: [
        {
          heading: "What the game stores",
          body: [
            "Everything the game stores stays **on your phone**:",
            {
              list: [
                "your decks, your card collection, your latitas (the in-game currency) and your card packs;",
                "your progress: rivals defeated, puzzles solved, achievements and stats;",
                "the name, title and cosmetics you choose for your profile;",
                "your settings (sound, music, vibration, animations).",
              ],
            },
            "None of that leaves your phone: there are no accounts, no servers of its own and no cloud copies. If you uninstall the game or clear its data, it’s lost. The game isn’t included in Android backups.",
          ],
        },
        {
          heading: "What it doesn’t do",
          body: [
            {
              list: [
                "It doesn’t ask for your real name, your email or any other personal data. The profile name is optional: you choose it and it stays only on your phone.",
                "It doesn’t use your location, contacts, camera, microphone or photos.",
                "It has no ads.",
                "It doesn’t use analytics or tracking tools, and it doesn’t share data with third parties.",
              ],
            },
          ],
        },
        {
          heading: "Purchases",
          body: [
            "The whole game can be played for free. In the game you can buy latitas and support the game. Those purchases are processed by **Google Play**: the game never sees your card or your payment details. The only thing it receives from Google Play is the confirmation of each purchase, which it stores on your phone so it doesn’t deliver it twice. What Google does with your payment details is explained in the [Google Privacy Policy](https://policies.google.com/privacy).",
          ],
        },
        {
          heading: "Internet connection",
          body: [
            "The game works offline. It only communicates with Google Play, through the store installed on your phone, to show prices and make purchases.",
          ],
        },
        {
          heading: "Children",
          body: [
            "The game is not directed at children under 13 and doesn’t collect data from anyone, of any age.",
          ],
        },
        {
          heading: "Changes",
          body: [
            "If this policy changes, the new version will be on this same page, with its date.",
          ],
        },
        {
          heading: "Contact",
          body: [
            "If you have questions about this policy or the game, write to **hernanhawryluk@gmail.com**.",
          ],
        },
      ],
    },
    es: {
      title: "Política de privacidad",
      intro: [
        "Dueños del sillón es un juego de cartas para Android hecho por Hernán Hawryluk. Esta política explica qué pasa con tus datos cuando jugás. La versión corta: el juego no junta datos tuyos ni los manda a ningún lado.",
      ],
      sections: [
        {
          heading: "Qué guarda el juego",
          body: [
            "Todo lo que el juego guarda queda **en tu teléfono**:",
            {
              list: [
                "tus mazos, tu colección de cartas, tus latitas y tus sobres;",
                "tu progreso: rivales vencidos, acertijos resueltos, logros y estadísticas;",
                "el nombre, el título y los cosméticos que elegís para tu perfil;",
                "tus ajustes (sonido, música, vibración, animaciones).",
              ],
            },
            "Nada de eso sale del teléfono: no hay cuentas, ni servidores propios, ni copias en la nube. Si desinstalás el juego o borrás sus datos, se pierden. El juego no se incluye en las copias de seguridad de Android.",
          ],
        },
        {
          heading: "Qué no hace",
          body: [
            {
              list: [
                "No pide tu nombre real, tu correo ni ningún otro dato personal. El nombre del perfil es opcional, lo elegís vos y queda solo en tu teléfono.",
                "No usa tu ubicación, tus contactos, tu cámara, tu micrófono ni tus fotos.",
                "No tiene publicidad.",
                "No usa herramientas de analítica ni de seguimiento, y no comparte datos con terceros.",
              ],
            },
          ],
        },
        {
          heading: "Compras",
          body: [
            "El juego se puede jugar entero gratis. Dentro de él se pueden comprar latitas y apoyar el juego. Esas compras las procesa **Google Play**: el juego nunca ve tu tarjeta ni tus datos de pago. Lo único que recibe de Google Play es la confirmación de cada compra, que guarda en tu teléfono para no entregarla dos veces. Lo que Google hace con tus datos de pago lo explica la [Política de Privacidad de Google](https://policies.google.com/privacy).",
          ],
        },
        {
          heading: "Conexión a internet",
          body: [
            "El juego funciona sin conexión. Solo se comunica con Google Play, a través de la tienda instalada en tu teléfono, para mostrar los precios y hacer las compras.",
          ],
        },
        {
          heading: "Chicos y chicas",
          body: [
            "El juego no está dirigido a menores de 13 años y no junta datos de nadie, de ninguna edad.",
          ],
        },
        {
          heading: "Cambios",
          body: [
            "Si esta política cambia, la nueva versión va a estar en esta misma página, con su fecha.",
          ],
        },
        {
          heading: "Contacto",
          body: [
            "Si tenés preguntas sobre esta política o sobre el juego, escribí a **hernanhawryluk@gmail.com**.",
          ],
        },
      ],
    },
  },
};

export default duenosDelSillon;
