import type { LegalDocument } from "@/lib/types";

const duenosDelSillon: LegalDocument = {
  slug: "duenos-del-sillon",
  appName: "Dueños del sillón",
  lastUpdated: "2026-11-15",
  content: {
    en: {
      title: "Privacy Policy",
      intro: [
        "Dueños del sillón is a card game for Android made by Hernán Hawryluk. This policy explains what happens to your data when you play. The rules of use and purchases are in the [Terms of Service](https://hernan-hawryluk.vercel.app/terms/duenos-del-sillon). The short version: almost everything stays on your phone. If you connect Google Play Games, which is optional, Google stores your achievements and a copy of your progress in your account. If you play in “El barrio”, the online duel, which is also optional, our server stores what it needs for you to play with other people: your Play Games ID, the name you choose, your collection, your league and your duels. And if you play in “Visita”, your phone talks directly to the phone of whoever is next to you, without the internet.",
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
                "your wishlist, and the card trades you made in “Visita” (the date and the two cards), to count the day’s trades;",
                "your settings (sound, music and vibration).",
              ],
            },
            "None of that reaches us, except what “El barrio” needs if you play online (see below). The game has no accounts of its own: if you don’t connect Google Play Games, everything stays only on your phone, and if you uninstall the game or clear its data, it’s lost. The game isn’t included in Android backups.",
          ],
        },
        {
          heading: "What it doesn’t do",
          body: [
            {
              list: [
                "It doesn’t ask for your real name, your email or any other personal data. The profile name is optional and you choose it. It stays on your phone, in the copy in your account if you connect Play Games and, if you play in “El barrio”, on our server, which shows it to your rivals.",
                "It doesn’t use your location, contacts, camera, microphone or photos. On Android 8 to 12, “Visita” asks for the location permission because Android requires it to look for other phones over Bluetooth, but the game never reads where you are.",
                "It has no ads.",
                "It doesn’t use analytics or tracking tools, and it doesn’t sell or share your data with third parties. Our server runs on Google Cloud, which stores its data on our behalf. The Google libraries the game uses (Play Games, Play Integrity and the “Visita” connection) send Google their own usage data, as explained below.",
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
            "The game only reads these things from Google:",
            {
              list: [
                "your player ID, to know whether you switched accounts;",
                "your gamer name, to show it in your game profile;",
                "that copy, to offer to restore your progress on another phone. It always asks you before replacing anything;",
                "and, if you play in “El barrio”, a single-use code with which our server asks Google for your player ID.",
              ],
            },
            "Our server doesn’t see your achievements or that copy, and it doesn’t store your gamer name.",
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
          heading: "“El barrio”: the online duel",
          body: [
            "“El barrio” is for playing duels over the internet against other people, with a league. It’s optional, and it needs Google Play Games connected.",
            {
              list: [
                "**When our server finds out about you:** it knows nothing about you until you tap “Buscar rival” for the first time. Before you enter, the game shows you the barrio’s rules.",
                "**Who you are to the server:** the game asks Play Games for a single-use code, and the server exchanges it with Google for your Play Games player profile. It only uses your ID from it: it doesn’t store your gamer name or your avatar, and it doesn’t receive your email or your Google name. Then it gives the game a session of its own, for 30 days, which stays only on your phone.",
                [
                  "**What our server stores:**",
                  {
                    list: [
                      "your Play Games player ID, and a code derived from it, which is the only thing that appears in the server’s logs and in moderation;",
                      "the name you choose for the barrio, which is your profile’s, and the version of the rules you accepted;",
                      "your league: your points and the best division you reached;",
                      "your collection, as you sent it in your last search (how many copies of each card you have, your portraits, card backs, titles and temperaments, and whether you supported the game), to check that you play only with what’s yours;",
                      "your duels: against whom, when and how they ended;",
                      "the players you blocked (with the name they had and the date), the reports you made and the ones made about you (the reason, the date and the reported name);",
                      "whether you are suspended, until when, and the last time you played online.",
                    ],
                  },
                ],
                "**What your rival sees:** your barrio name (or “Un gato del barrio”, if it’s hidden), your portrait, your frame, your title, your division and your temperament. As in any duel, they also see your deck list, the cards you play and the reactions you send, and whether you play with a screen reader, because then both of you get more time.",
                "**Google Play Integrity:** each search for a rival comes with a check by Google, which confirms that the game is the one from Google Play and that the phone hasn’t been modified. Google tells our server the result, which it doesn’t store. What Google does with that data is explained in the [Google Privacy Policy](https://policies.google.com/privacy).",
                "**Your name and reports:** a filter checks each name before showing it. At the end of a duel, you can report your rival’s name, by choosing a reason and without writing anything, or block them. We review the reports. If three different players report a name within 30 days, it’s hidden until that review.",
                "**Where:** the server and its data are on Google Cloud, in São Paulo (Brazil). The connection is encrypted.",
                [
                  "**How long it’s kept:**",
                  {
                    list: [
                      "your player and your collection, up to 24 months after the last time you played online;",
                      "duels, 30 days;",
                      "reports, up to 180 days after they are reviewed;",
                      "what we do as moderators (for example, hiding a name or suspending someone), 2 years, with the code and not with your ID;",
                      "the server’s technical logs (each request, with its IP address), 30 days, without your ID or your name.",
                    ],
                  },
                ],
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
                "**What stays stored:** if you trade cards, each phone notes the trade to count the day’s trades: the date and the two cards, without the other player’s name. If either of you connected Play Games, that note also goes in the copy in their account. Version 0.6.0 also noted the name: the versions after it delete it from the phone when the game opens, and from the Play Games copy the next time it’s saved.",
                "**The permissions:** Android asks you for permission for nearby devices. On Android 8 to 12 it also asks for the location, because Android requires it to look for phones over Bluetooth, and on Android 17, for the local network. The game uses them only to find the other phone, and it never reads your location.",
                "**Google’s library:** Nearby Connections sends Google usage statistics to improve the service: how the connections perform, the phone’s model, the country, the Android version and the app’s name. You can turn them off in Android’s settings: Google › Usage & diagnostics.",
              ],
            },
          ],
        },
        {
          heading: "How to delete your data",
          body: [
            "What Dueños del sillón stores is in three places, and you delete it yourself:",
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
                "**On our server, if you played in “El barrio”:** in the game, on your profile, tap **Borrar mis datos de El barrio**. If you no longer have the game, ask for it by email (see “Contact”). Your player, your name, your league, your collection, your duels, your blocks and the reports you made are deleted. If you search for a rival again later, you start from scratch.",
              ],
            },
            "If the game is still installed and connected to Play Games, it saves a copy in your account again when you leave it. To stop that, uninstall it or delete your whole Play Games profile.",
            "If you traded cards in “Visita” with someone who had version 0.6.0, their phone noted your name with the trade. It’s deleted when that person updates the game and opens it (from the copy in their Play Games account, the next time it’s saved), or in the same way as the rest of their data.",
            "**What’s kept:** from “El barrio”, the reports others made about your name, with the code and not with your ID, up to 180 days after they are reviewed; what we did as moderators, 2 years; and, if you were suspended, the suspension until it ends, so that it still applies if you come back. We have no other copies. Your purchases stay in your Google Play order history, and what Google keeps is explained in the [Google Privacy Policy](https://policies.google.com/privacy).",
          ],
        },
        {
          heading: "Internet connection",
          body: [
            "The game works offline, except “El barrio”. It communicates with Google Play, through the Google services on your phone:",
            {
              list: [
                "to show prices and make purchases;",
                "for Play Games, if you connected it;",
                "to offer you a new version of the game;",
                "and, once, to ask you for a review on Play. The window is Google’s, and the game doesn’t see whether you leave one or what you write.",
              ],
            },
            "If you play in “El barrio”, it also communicates with our server, and with Google Play Integrity on each search for a rival.",
            "“Visita” doesn’t use the internet: the phones talk directly, over Bluetooth and Wi-Fi.",
          ],
        },
        {
          heading: "Children",
          body: [
            "The game is not directed at children under 13. If we learn that someone under 13 played in “El barrio”, we delete their data from our server.",
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
        "Dueños del sillón es un juego de cartas para Android hecho por Hernán Hawryluk. Esta política explica qué pasa con tus datos cuando jugás. Las reglas de uso y de las compras están en las [Condiciones del servicio](https://hernan-hawryluk.vercel.app/terms/duenos-del-sillon). La versión corta: casi todo queda en tu teléfono. Si conectás Google Play Juegos, que es opcional, Google guarda en tu cuenta tus logros y una copia de tu progreso. Si jugás en «El barrio», el duelo en línea, que también es opcional, nuestro servidor guarda lo necesario para jugar con otras personas: tu identificador de Play Juegos, el nombre que elegís, tu colección, tu liga y tus duelos. Y si jugás en «Visita», tu teléfono se habla directo con el de quien está al lado, sin internet.",
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
                "tu lista de deseos, y los cambios de cartas que hiciste en «Visita» (la fecha y las dos cartas), para contar los del día;",
                "tus ajustes (sonido, música y vibración).",
              ],
            },
            "Nada de eso nos llega, salvo lo que «El barrio» necesita si jugás en línea (más abajo). El juego no tiene cuentas propias: si no conectás Google Play Juegos, todo queda solo en tu teléfono, y si desinstalás el juego o borrás sus datos, se pierde. El juego no se incluye en las copias de seguridad de Android.",
          ],
        },
        {
          heading: "Qué no hace",
          body: [
            {
              list: [
                "No pide tu nombre real, tu correo ni ningún otro dato personal. El nombre del perfil es opcional y lo elegís vos. Queda en tu teléfono, en la copia de tu cuenta si conectás Play Juegos y, si jugás en «El barrio», en nuestro servidor, que se lo muestra a tus rivales.",
                "No usa tu ubicación, tus contactos, tu cámara, tu micrófono ni tus fotos. En Android 8 a 12, «Visita» pide el permiso de ubicación porque Android lo exige para buscar otros teléfonos por Bluetooth, pero el juego nunca lee dónde estás.",
                "No tiene publicidad.",
                "No usa herramientas de analítica ni de seguimiento, y no vende ni comparte tus datos con terceros. Nuestro servidor corre en Google Cloud, que guarda sus datos por cuenta nuestra. Las bibliotecas de Google que usa el juego (Play Juegos, Play Integrity y la conexión de «Visita») le mandan a Google sus propios datos de uso, como se explica más abajo.",
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
            "El juego solo lee de Google estas cosas:",
            {
              list: [
                "tu identificador de jugador, para saber si cambiaste de cuenta;",
                "tu nombre de jugador, para mostrarlo en tu perfil del juego;",
                "esa copia, para ofrecerte recuperar tu progreso en otro teléfono. Antes de reemplazar algo, siempre te pregunta;",
                "y, si jugás en «El barrio», un código de un solo uso con el que nuestro servidor le pregunta a Google tu identificador de jugador.",
              ],
            },
            "Nuestro servidor no ve tus logros ni esa copia, y no guarda tu nombre de jugador.",
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
          heading: "«El barrio»: el duelo en línea",
          body: [
            "«El barrio» sirve para jugar duelos por internet contra otras personas, con una liga. Es opcional, y necesita Google Play Juegos conectado.",
            {
              list: [
                "**Cuándo se entera nuestro servidor:** no sabe nada de vos hasta que tocás «Buscar rival» por primera vez. Antes de entrar, el juego te muestra las reglas del barrio.",
                "**Quién sos para el servidor:** el juego le pide a Play Juegos un código de un solo uso, y el servidor se lo cambia a Google por tu ficha de jugador de Play Juegos. De ella usa solo tu identificador: no guarda tu nombre de jugador ni tu avatar, y no recibe tu correo ni tu nombre de Google. Después le da al juego una sesión propia, por 30 días, que queda solo en tu teléfono.",
                [
                  "**Qué guarda nuestro servidor:**",
                  {
                    list: [
                      "tu identificador de jugador de Play Juegos, y un código que sale de él, que es lo único que aparece en los registros del servidor y en la moderación;",
                      "el nombre que elegís para el barrio, que es el de tu perfil, y la versión de las reglas que aceptaste;",
                      "tu liga: tus puntos y la mejor división que alcanzaste;",
                      "tu colección, como la mandaste en tu última búsqueda (cuántas copias tenés de cada carta, tus retratos, reversos, títulos y temperamentos, y si apoyaste el juego), para comprobar que jugás solo con lo tuyo;",
                      "tus duelos: con quién, cuándo y cómo terminaron;",
                      "los jugadores que bloqueaste (con el nombre que tenían y la fecha), las denuncias que hiciste y las que te hicieron (el motivo, la fecha y el nombre denunciado);",
                      "si estás suspendido, hasta cuándo, y la última vez que jugaste en línea.",
                    ],
                  },
                ],
                "**Qué ve tu rival:** tu nombre del barrio (o «Un gato del barrio», si está oculto), tu retrato, tu marco, tu título, tu división y tu temperamento. Como en cualquier duelo, también ve la lista de tu mazo, las cartas que jugás y las reacciones que mandás, y si jugás con lector de pantalla, porque así los dos tienen más tiempo.",
                "**Google Play Integrity:** cada búsqueda de rival va con una verificación de Google, que confirma que el juego es el de Google Play y que el teléfono no fue modificado. Google le dice el resultado a nuestro servidor, que no lo guarda. Lo que Google hace con esos datos lo explica la [Política de Privacidad de Google](https://policies.google.com/privacy).",
                "**Tu nombre y las denuncias:** un filtro revisa cada nombre antes de mostrarlo. Al terminar un duelo, podés denunciar el nombre de tu rival, eligiendo un motivo y sin escribir nada, o bloquearlo. Nosotros revisamos las denuncias. Si tres jugadores distintos denuncian un nombre en 30 días, queda oculto hasta esa revisión.",
                "**Dónde:** el servidor y sus datos están en Google Cloud, en San Pablo (Brasil). La conexión va cifrada.",
                [
                  "**Cuánto se guarda:**",
                  {
                    list: [
                      "tu jugador y tu colección, hasta 24 meses después de la última vez que jugaste en línea;",
                      "los duelos, 30 días;",
                      "las denuncias, hasta 180 días después de revisarlas;",
                      "lo que hacemos como moderadores (por ejemplo, ocultar un nombre o suspender a alguien), 2 años, con el código y no con tu identificador;",
                      "los registros técnicos del servidor (cada pedido, con su dirección IP), 30 días, sin tu identificador ni tu nombre.",
                    ],
                  },
                ],
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
                "**Qué queda guardado:** si cambian cartas, cada teléfono anota el cambio para contar los del día: la fecha y las dos cartas, sin el nombre del otro. Si alguno conectó Play Juegos, esa nota también va en la copia de su cuenta. La versión 0.6.0 anotaba también el nombre: las que siguen lo borran del teléfono al abrir el juego, y de la copia de Play Juegos la próxima vez que se guarda.",
                "**Los permisos:** Android te pide permiso para los dispositivos cercanos. En Android 8 a 12 también para la ubicación, porque Android la exige para buscar por Bluetooth, y en Android 17, para la red local. El juego los usa solo para encontrar el otro teléfono, y nunca lee tu ubicación.",
                "**La biblioteca de Google:** Nearby Connections le manda a Google estadísticas de uso para mejorar el servicio: el rendimiento de las conexiones, el modelo del teléfono, el país, la versión de Android y el nombre de la app. Podés apagarlas en la configuración de Android: Google › Uso y diagnóstico.",
              ],
            },
          ],
        },
        {
          heading: "Cómo borrar tus datos",
          body: [
            "Lo que Dueños del sillón guarda está en tres lugares, y lo borrás vos:",
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
                "**En nuestro servidor, si jugaste en «El barrio»:** desde el juego, en tu perfil, tocá **Borrar mis datos de El barrio**. Si ya no tenés el juego, pedilo por correo (ver «Contacto»). Se borran tu jugador, tu nombre, tu liga, tu colección, tus duelos, tus bloqueos y las denuncias que hiciste. Si después volvés a buscar rival, empezás de cero.",
              ],
            },
            "Si el juego sigue instalado y conectado a Play Juegos, al salir vuelve a guardar una copia en tu cuenta. Para que no lo haga, desinstalalo o borrá todo tu perfil de Play Juegos.",
            "Si cambiaste cartas en «Visita» con alguien que tenía la versión 0.6.0, su teléfono anotó tu nombre con el cambio. Se borra cuando esa persona actualiza el juego y lo abre (de la copia de su cuenta en Play Juegos, la próxima vez que se guarda), o del mismo modo que el resto de sus datos.",
            "**Qué queda:** de «El barrio», las denuncias que otros hicieron sobre tu nombre, con el código y no con tu identificador, hasta 180 días después de revisarlas; lo que hicimos como moderadores, 2 años; y, si estabas suspendido, la suspensión hasta que termine, para que siga si volvés. No tenemos otras copias. Tus compras siguen en el historial de pedidos de tu cuenta de Google Play, y lo que conserva Google lo explica la [Política de Privacidad de Google](https://policies.google.com/privacy).",
          ],
        },
        {
          heading: "Conexión a internet",
          body: [
            "El juego funciona sin conexión, salvo «El barrio». Se comunica con Google Play, a través de los servicios de Google de tu teléfono:",
            {
              list: [
                "para mostrar los precios y hacer las compras;",
                "para Play Juegos, si lo conectaste;",
                "para ofrecerte una versión nueva del juego;",
                "y, una vez, para pedirte una reseña en Play. La ventana es de Google, y el juego no ve si la dejás ni qué escribís.",
              ],
            },
            "Si jugás en «El barrio», también con nuestro servidor, y con Google Play Integrity en cada búsqueda de rival.",
            "«Visita» no usa internet: los teléfonos se hablan directo, por Bluetooth y Wi-Fi.",
          ],
        },
        {
          heading: "Chicos y chicas",
          body: [
            "El juego no está dirigido a menores de 13 años. Si sabemos que alguien menor de 13 jugó en «El barrio», borramos sus datos de nuestro servidor.",
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
