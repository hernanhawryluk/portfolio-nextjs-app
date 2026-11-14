import type { LegalDocument } from "@/lib/types";

const duenosDelSillon: LegalDocument = {
  slug: "duenos-del-sillon",
  appName: "Dueños del sillón",
  lastUpdated: "2026-11-14",
  content: {
    en: {
      title: "Privacy Policy",
      intro: [
        "Dueños del sillón is a card game for Android made by Hernán Hawryluk. This policy explains what happens to your data when you play. The rules of use and purchases are in the [Terms of Service](https://hernan-hawryluk.vercel.app/terms/duenos-del-sillon). The short version: the game doesn’t collect your data for us. If you connect Google Play Games, which is optional, Google stores your achievements and a copy of your progress in your account. And if you play in “Visita”, your phone talks directly to the phone of whoever is next to you, without the internet.",
      ],
      sections: [
        {
          heading: "What the game stores",
          body: [
            "Everything the game stores stays **on your phone**:",
            {
              list: [
                "your decks, your card collection, your latitas (the in-game currency), your card packs and your temperaments;",
                "your progress: the story, the rivals defeated, the puzzles solved, the achievements and the stats;",
                "the name, title and cosmetics you choose for your profile;",
                "your wishlist, and the card trades you made in “Visita” (the date, the two cards and the name of whoever traded with you), to count the day’s trades;",
                "your settings (sound, music and vibration).",
              ],
            },
            "None of that reaches us: the game has no accounts or servers of its own. If you don’t connect Google Play Games, everything stays only on your phone, and if you uninstall the game or clear its data, it’s lost. The game isn’t included in Android backups.",
          ],
        },
        {
          heading: "What it doesn’t do",
          body: [
            {
              list: [
                "It doesn’t ask for your real name, your email or any other personal data. The profile name is optional and you choose it. It stays on your phone and, if you connect Play Games, in the copy in your account.",
                "It doesn’t use your location, contacts, camera, microphone or photos. On Android 8 to 12, “Visita” asks for the location permission because Android requires it to look for other phones over Bluetooth, but the game never reads where you are.",
                "It has no ads.",
                "It doesn’t use analytics or tracking tools of its own, and it doesn’t share data with third parties. The Google libraries it uses (Play Games and the “Visita” connection) send Google their own usage data, as explained below.",
              ],
            },
          ],
        },
        {
          heading: "Purchases",
          body: [
            "The whole game can be played for free. In the game you can buy latitas and support the game. Those purchases are processed by **Google Play**: the game never sees your card or your payment details. The only thing it receives from Google Play is the confirmation of each purchase, which it stores on your phone (and, if you connected Play Games, in the copy in your account) so it doesn’t deliver it twice. What Google does with your payment details is explained in the [Google Privacy Policy](https://policies.google.com/privacy).",
          ],
        },
        {
          heading: "Google Play Games",
          body: [
            "It’s optional. If your phone already has a Google Play Games profile, the game connects on its own. If not, only when you tap “Conectar con Play Juegos” in your game profile.",
            "With Play Games connected, Google stores in your account:",
            {
              list: [
                "**your Play Games player profile** (your gamer name and your avatar), which belongs to Google;",
                "**the achievements** you earned in this game;",
                "**a copy of your progress:** your collection, your decks, your latitas and packs, your temperaments and cosmetics, your stats, the rival ladder, the story, your profile’s name and title, your wishlist, your card trades and the purchases already delivered. Your settings stay only on your phone.",
              ],
            },
            "The game only reads three things from Google:",
            {
              list: [
                "your player ID, to know whether you switched accounts;",
                "your gamer name, to show it in your game profile;",
                "that copy, to offer to restore your progress on another phone. It always asks you before replacing anything.",
              ],
            },
            "We have no servers and see none of that.",
            {
              list: [
                "**Who sees your achievements** is up to you, in the visibility settings of your Play Games profile.",
                "**The Play Games library** sends Google its own diagnostic and usage data, so it can work.",
                "**To delete** your profile and your games’ data, go to your Play Games profile ([play.google.com/games/profile](https://play.google.com/games/profile)) or your Google Account ([myaccount.google.com](https://myaccount.google.com)). The steps are in “How to delete your data”.",
              ],
            },
          ],
        },
        {
          heading: "“Visita”: with whoever is next to you",
          body: [
            "“Visita” is for playing a duel and trading cards with someone who is next to you. It’s optional.",
            {
              list: [
                "**How they connect:** the two phones find each other and talk directly, over Bluetooth and Wi-Fi, with the Nearby Connections library of Google’s services. They don’t use the internet or go through any server, and the connection is encrypted between the two. To connect, both have to accept the same 4-digit code.",
                [
                  "**What the other phone sees**, only while the visit lasts:",
                  {
                    list: [
                      "your name, your portrait, your frame and your title;",
                      "how many copies of each card you have, your wishlist and how many trades you have left that day;",
                      "in a duel, the same as any rival: your temperament, your deck list, the cards you play and the reactions you send.",
                    ],
                  },
                ],
                "**What stays stored:** if you trade cards, each phone notes the trade (the date, the two cards and the other player’s name) to count the day’s trades, and keeps it for 30 days. If either of you connected Play Games, that note also goes in the copy in their account.",
                "**The permissions:** Android asks you for permission for nearby devices. On Android 8 to 12 it also asks for the location, because Android requires it to look for phones over Bluetooth, and on Android 17, for the local network. The game uses them only to find the other phone, and it never reads your location.",
                "**Google’s library:** Nearby Connections sends Google usage statistics to improve the service: how the connections perform, the phone’s model, the country, the Android version and the app’s name. You can turn them off in Android’s settings: Google › Usage & diagnostics.",
              ],
            },
          ],
        },
        {
          heading: "How to delete your data",
          body: [
            "We don’t hold any of your data to delete: the game has no servers of its own. What Dueños del sillón stores is in two places, and you delete it yourself:",
            {
              list: [
                "**On your phone:** your collection, your decks, your progress, your latitas, your wishlist, your card trades and your settings. They’re deleted when you uninstall the game or clear its data in Android’s settings (Apps › Dueños del sillón › Storage).",
                [
                  "**In your Google account, if you connected Play Games:** the copy of your progress and this game’s achievements. To delete them:",
                  {
                    list: [
                      "go to [play.google.com/games/profile](https://play.google.com/games/profile);",
                      "tap **Your data**, then **Delete Play Games account & data**;",
                      "under “Delete individual game data”, find **Dueños del sillón** and tap **Delete**.",
                    ],
                  },
                  "You can also do it from the Play Store app: your profile icon › Settings › General › Play Games profile › Privacy & settings › Delete profile & game data. On that same page you can delete your whole Play Games profile.",
                ],
              ],
            },
            "If the game is still installed and connected to Play Games, it saves a copy in your account again when you leave it. To stop that, uninstall it or delete your whole Play Games profile.",
            "If you traded cards with someone in “Visita”, their phone also noted that trade, with your name, for 30 days. That note is deleted from their phone in the same way.",
            "**What’s kept:** we keep nothing, since we have no separate copies. Your purchases stay in your Google Play order history, and what Google keeps is explained in the [Google Privacy Policy](https://policies.google.com/privacy).",
          ],
        },
        {
          heading: "Internet connection",
          body: [
            "The game works offline. It only communicates with Google Play, through the Google services on your phone:",
            {
              list: [
                "to show prices and make purchases;",
                "for Play Games, if you connected it;",
                "to offer you a new version of the game;",
                "and, once, to ask you for a review on Play. The window is Google’s, and the game doesn’t see whether you leave one or what you write.",
              ],
            },
            "“Visita” doesn’t use the internet: the phones talk directly, over Bluetooth and Wi-Fi.",
          ],
        },
        {
          heading: "Children",
          body: [
            "The game is not directed at children under 13. We don’t collect data from anyone, of any age.",
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
        "Dueños del sillón es un juego de cartas para Android hecho por Hernán Hawryluk. Esta política explica qué pasa con tus datos cuando jugás. Las reglas de uso y de las compras están en las [Condiciones del servicio](https://hernan-hawryluk.vercel.app/terms/duenos-del-sillon). La versión corta: el juego no junta datos tuyos para nosotros. Si conectás Google Play Juegos, que es opcional, Google guarda en tu cuenta tus logros y una copia de tu progreso. Y si jugás en «Visita», tu teléfono se habla directo con el de quien está al lado, sin internet.",
      ],
      sections: [
        {
          heading: "Qué guarda el juego",
          body: [
            "Todo lo que el juego guarda queda **en tu teléfono**:",
            {
              list: [
                "tus mazos, tu colección de cartas, tus latitas, tus sobres y tus temperamentos;",
                "tu progreso: la historia, los rivales vencidos, los acertijos resueltos, los logros y las estadísticas;",
                "el nombre, el título y los cosméticos que elegís para tu perfil;",
                "tu lista de deseos, y los cambios de cartas que hiciste en «Visita» (la fecha, las dos cartas y el nombre de quien cambió con vos), para contar los del día;",
                "tus ajustes (sonido, música y vibración).",
              ],
            },
            "Nada de eso nos llega: el juego no tiene cuentas propias ni servidores propios. Si no conectás Google Play Juegos, todo queda solo en tu teléfono, y si desinstalás el juego o borrás sus datos, se pierde. El juego no se incluye en las copias de seguridad de Android.",
          ],
        },
        {
          heading: "Qué no hace",
          body: [
            {
              list: [
                "No pide tu nombre real, tu correo ni ningún otro dato personal. El nombre del perfil es opcional y lo elegís vos. Queda en tu teléfono y, si conectás Play Juegos, en la copia de tu cuenta.",
                "No usa tu ubicación, tus contactos, tu cámara, tu micrófono ni tus fotos. En Android 8 a 12, «Visita» pide el permiso de ubicación porque Android lo exige para buscar otros teléfonos por Bluetooth, pero el juego nunca lee dónde estás.",
                "No tiene publicidad.",
                "No usa herramientas de analítica ni de seguimiento propias, y no comparte datos con terceros. Las bibliotecas de Google que usa (Play Juegos y la conexión de «Visita») le mandan a Google sus propios datos de uso, como se explica más abajo.",
              ],
            },
          ],
        },
        {
          heading: "Compras",
          body: [
            "El juego se puede jugar entero gratis. Dentro de él se pueden comprar latitas y apoyar el juego. Esas compras las procesa **Google Play**: el juego nunca ve tu tarjeta ni tus datos de pago. Lo único que recibe de Google Play es la confirmación de cada compra, que guarda en tu teléfono (y, si conectaste Play Juegos, en la copia de tu cuenta) para no entregarla dos veces. Lo que Google hace con tus datos de pago lo explica la [Política de Privacidad de Google](https://policies.google.com/privacy).",
          ],
        },
        {
          heading: "Google Play Juegos",
          body: [
            "Es opcional. Si en tu teléfono ya tenés un perfil de Google Play Juegos, el juego se conecta solo. Si no, solo cuando tocás «Conectar con Play Juegos» en tu perfil del juego.",
            "Con Play Juegos conectado, Google guarda en tu cuenta:",
            {
              list: [
                "**tu perfil de jugador de Play Juegos** (tu nombre de jugador y tu avatar), que es de Google;",
                "**los logros** de este juego que conseguiste;",
                "**una copia de tu progreso:** tu colección, tus mazos, tus latitas y sobres, tus temperamentos y cosméticos, tus estadísticas, la escalera de rivales, la historia, el nombre y el título de tu perfil, tu lista de deseos, tus cambios de cartas y las compras ya entregadas. Tus ajustes quedan solo en el teléfono.",
              ],
            },
            "El juego solo lee de Google tres cosas:",
            {
              list: [
                "tu identificador de jugador, para saber si cambiaste de cuenta;",
                "tu nombre de jugador, para mostrarlo en tu perfil del juego;",
                "esa copia, para ofrecerte recuperar tu progreso en otro teléfono. Antes de reemplazar algo, siempre te pregunta.",
              ],
            },
            "Nosotros no tenemos servidores y no vemos nada de eso.",
            {
              list: [
                "**Quién ve tus logros** lo decidís vos, en la visibilidad de tu perfil de Play Juegos.",
                "**La biblioteca de Play Juegos** le manda a Google sus propios datos de diagnóstico y de uso, para su funcionamiento.",
                "**Para borrar** tu perfil y los datos de tus juegos, entrá a tu perfil de Play Juegos ([play.google.com/games/profile](https://play.google.com/games/profile)) o a tu cuenta de Google ([myaccount.google.com](https://myaccount.google.com)). Los pasos están en «Cómo borrar tus datos».",
              ],
            },
          ],
        },
        {
          heading: "«Visita»: con quien está al lado",
          body: [
            "«Visita» sirve para jugar un duelo y cambiar cartas con alguien que está al lado. Es opcional.",
            {
              list: [
                "**Cómo se conectan:** los dos teléfonos se encuentran y se hablan directo, por Bluetooth y Wi-Fi, con la biblioteca Nearby Connections de los servicios de Google. No usan internet ni pasan por ningún servidor, y la conexión va cifrada entre los dos. Para conectarse, los dos tienen que aceptar el mismo código de 4 cifras.",
                [
                  "**Qué ve el otro teléfono**, solo mientras dura la visita:",
                  {
                    list: [
                      "tu nombre, tu retrato, tu marco y tu título;",
                      "cuántas copias tenés de cada carta, tu lista de deseos y cuántos cambios te quedan en el día;",
                      "en un duelo, lo mismo que cualquier rival: tu temperamento, la lista de tu mazo, las cartas que jugás y las reacciones que mandás.",
                    ],
                  },
                ],
                "**Qué queda guardado:** si cambian cartas, cada teléfono anota el cambio (la fecha, las dos cartas y el nombre del otro) para contar los del día, y lo guarda 30 días. Si alguno conectó Play Juegos, esa nota también va en la copia de su cuenta.",
                "**Los permisos:** Android te pide permiso para los dispositivos cercanos. En Android 8 a 12 también para la ubicación, porque Android la exige para buscar por Bluetooth, y en Android 17, para la red local. El juego los usa solo para encontrar el otro teléfono, y nunca lee tu ubicación.",
                "**La biblioteca de Google:** Nearby Connections le manda a Google estadísticas de uso para mejorar el servicio: el rendimiento de las conexiones, el modelo del teléfono, el país, la versión de Android y el nombre de la app. Podés apagarlas en la configuración de Android: Google › Uso y diagnóstico.",
              ],
            },
          ],
        },
        {
          heading: "Cómo borrar tus datos",
          body: [
            "Nosotros no tenemos datos tuyos para borrar: el juego no tiene servidores propios. Lo que Dueños del sillón guarda está en dos lugares, y lo borrás vos:",
            {
              list: [
                "**En tu teléfono:** tu colección, tus mazos, tu progreso, tus latitas, tu lista de deseos, tus cambios de cartas y tus ajustes. Se borran al desinstalar el juego o al borrar sus datos desde la configuración de Android (Apps › Dueños del sillón › Almacenamiento).",
                [
                  "**En tu cuenta de Google, si conectaste Play Juegos:** la copia de tu progreso y los logros de este juego. Para borrarlos:",
                  {
                    list: [
                      "entrá a [play.google.com/games/profile](https://play.google.com/games/profile);",
                      "tocá **Tus datos** y después **Borrar la cuenta y los datos de Play Juegos**;",
                      "en «Borra datos de juegos específicos», buscá **Dueños del sillón** y tocá **Borrar**.",
                    ],
                  },
                  "También se puede desde la app de Play Store: tu ícono de perfil › Configuración › General › Perfil de Play Juegos › Privacidad y configuración › Borrar datos de perfil y de juegos. En esa misma página podés borrar todo tu perfil de Play Juegos.",
                ],
              ],
            },
            "Si el juego sigue instalado y conectado a Play Juegos, al salir vuelve a guardar una copia en tu cuenta. Para que no lo haga, desinstalalo o borrá todo tu perfil de Play Juegos.",
            "Si cambiaste cartas con alguien en «Visita», su teléfono también anotó ese cambio, con tu nombre, por 30 días. Esa nota se borra de su teléfono del mismo modo.",
            "**Qué queda:** nosotros no conservamos nada, porque no tenemos copias aparte. Tus compras siguen en el historial de pedidos de tu cuenta de Google Play, y lo que conserva Google lo explica la [Política de Privacidad de Google](https://policies.google.com/privacy).",
          ],
        },
        {
          heading: "Conexión a internet",
          body: [
            "El juego funciona sin conexión. Solo se comunica con Google Play, a través de los servicios de Google de tu teléfono:",
            {
              list: [
                "para mostrar los precios y hacer las compras;",
                "para Play Juegos, si lo conectaste;",
                "para ofrecerte una versión nueva del juego;",
                "y, una vez, para pedirte una reseña en Play. La ventana es de Google, y el juego no ve si la dejás ni qué escribís.",
              ],
            },
            "«Visita» no usa internet: los teléfonos se hablan directo, por Bluetooth y Wi-Fi.",
          ],
        },
        {
          heading: "Chicos y chicas",
          body: [
            "El juego no está dirigido a menores de 13 años. Nosotros no juntamos datos de nadie, de ninguna edad.",
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
