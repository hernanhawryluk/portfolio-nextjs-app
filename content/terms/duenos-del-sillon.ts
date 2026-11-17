import type { LegalDocument } from "@/lib/types";

const duenosDelSillon: LegalDocument = {
  slug: "duenos-del-sillon",
  appName: "Dueños del sillón",
  lastUpdated: "2026-11-17",
  content: {
    en: {
      title: "Terms of Service",
      intro: [
        "These terms explain the rules for using Dueños del sillón and for making purchases in the game. We wrote them to be easy to understand; if anything isn’t clear, write to us.",
      ],
      sections: [
        {
          heading: "1. Who provides the game",
          body: [
            "Dueños del sillón is developed and provided by **Hernán Hawryluk**, who acts as a *trader* under the consumer protection rules of the European Union and the United Kingdom.",
            {
              list: [
                "**Email:** hernanhawryluk@gmail.com",
                "**Phone:** +5491130471861",
              ],
            },
            "In these terms, “we” refers to whoever provides the game, and “you” to whoever uses it.",
          ],
        },
        {
          heading: "2. Acceptance",
          body: [
            "By installing or using the game, you accept these terms and the [Privacy Policy](https://hernan-hawryluk.vercel.app/privacy/duenos-del-sillon). If you don’t agree, don’t use it. Google Play’s terms also apply to the download and to purchases.",
            "The game is a **beta version**: it may have bugs and it will change while we finish it.",
          ],
        },
        {
          heading: "3. Age",
          body: [
            "The game is for people **13 or older**. If you are a minor under the law of your country, you need permission from a parent or guardian to make purchases.",
          ],
        },
        {
          heading: "4. License to use",
          body: [
            "We give you a personal, free, non-exclusive and non-transferable permission to install the game and use it on your devices, for your entertainment and for non-commercial purposes.",
            {
              list: [
                "The game and all its content (cards, illustrations, texts, music, sounds and code) belong to us or are used with permission. The license doesn’t give you any rights over them outside the game.",
                "You may not copy, sell, rent or distribute the game, or modify, decompile or alter it, except to the extent the law expressly allows you to.",
                "You may not use the game to obtain purchases without paying for them, or to deceive other people.",
              ],
            },
          ],
        },
        {
          heading: "5. Latitas and in-game purchases",
          body: [
            { subheading: "What latitas are" },
            "**Latitas** are the game’s currency. You earn them by playing (the story, duels, puzzles and achievements), and you can also buy them. They are used to buy card packs, test decks, temperaments and cosmetics in the game, and nothing else:",
            {
              list: [
                "they have no monetary value and can’t be exchanged for money or for anything outside the game;",
                "they can’t be transferred to another person, and they only move to another phone with the Google Play Games copy (see section 6);",
                "they don’t expire as long as you have the game installed.",
              ],
            },
            { subheading: "What you can buy" },
            {
              table: {
                head: ["Product", "What you get"],
                rows: [
                  ["Puñadito de latitas", "250 latitas"],
                  ["Bolsa de latitas", "1,500 latitas"],
                  [
                    "Apoyá el juego",
                    "750 latitas, the title “Mecenas del sillón” and a golden frame for your portrait",
                  ],
                ],
              },
            },
            "You’ll see the final price, including any applicable taxes, in Google Play before you confirm each purchase. Payment is processed by **Google Play**: we never see your payment details. What you buy gives no advantage in duels: every card and everything used in play can be earned for free by playing.",
            { subheading: "Packs, decks and shiny cards" },
            {
              list: [
                "**Packs** contain random cards. Before you buy one, the Shop tells you what it may contain, how the protection against duplicate cards works and within how many packs, at most, you’ll get the next shiny card.",
                "**Cards are not sold individually.** Test decks are, and you only pay for the cards you’re missing.",
                "**Fusion:** four copies of a card can be fused into one shiny copy. It’s optional, the game asks you first, and it can’t be undone.",
              ],
            },
            { subheading: "Delivery" },
            "What you buy reaches the game **as soon as Google Play confirms the payment**. If you chose a payment method that clears later (for example, cash), it arrives when the payment clears, the next time you open the game.",
            { subheading: "Right of withdrawal" },
            "If you live in the European Union or the United Kingdom, you generally have 14 days to withdraw from a distance purchase. That right **doesn’t apply to digital content delivered immediately**, once you have given your express consent to its immediate delivery and acknowledged that you lose the right as a result.",
            "By confirming a purchase in the game, you request that delivery start at that moment and accept that, once it has been delivered, you can no longer withdraw from it. This doesn’t affect your rights if what you bought doesn’t arrive or doesn’t work as described: in that case, write to us.",
            { subheading: "Refunds" },
            {
              list: [
                "**From Google Play:** you can request them under its policies, from your order history.",
                "**From us:** if something went wrong with a purchase, write to us and we’ll sort it out with you.",
                "**Latitas already spent:** latitas used on packs or cosmetics are not refunded, unless the law says otherwise.",
              ],
            },
          ],
        },
        {
          heading: "6. Where your progress is stored",
          body: [
            "The game has no accounts of its own. **Your progress is stored on your phone:** your collection, your decks, your progress and your latitas, including the ones you bought. Only your “El barrio” league is kept by our server (see section 8).",
            {
              list: [
                [
                  "**If you connect Google Play Games** (it’s optional), a copy of your progress is also kept in your Google account, and it’s updated when you leave the game. On another phone, the game offers to restore it.",
                  {
                    list: [
                      "Restoring it replaces what’s on that phone, and that can’t be undone: that’s why it always asks you first and shows you what each side has.",
                      "Purchases made on that phone since version 0.5.0 are kept. Earlier ones are replaced along with everything else, unless the copy already has them.",
                      "If you play on two phones, their progress isn’t merged: the one with less can restore the other’s copy.",
                      "That copy depends on Google’s service: we don’t have it and can’t recover it for you.",
                    ],
                  },
                ],
                "**If you didn’t connect Play Games** and you uninstall the game, clear its data or change phones, all of that is lost.",
                "We don’t have a copy and **we can’t recover it**.",
                "A purchase that Google Play confirmed but the game hasn’t delivered yet arrives the next time you open it.",
              ],
            },
            "More details in the [Privacy Policy](https://hernan-hawryluk.vercel.app/privacy/duenos-del-sillon).",
          ],
        },
        {
          heading: "7. “Visita” and “La juntada”: with those next to you",
          body: [
            { subheading: "“Visita”: duels and trades" },
            "“Visita” connects your phone with the phone of someone who is next to you, without the internet, to play a duel or trade cards. It’s optional.",
            {
              list: [
                [
                  "**Trades:**",
                  {
                    list: [
                      "one card for another of the same kind (the same rarity and the same shine), up to 5 cards a day;",
                      "both players see both cards and both accept;",
                      "once made, a trade can’t be undone.",
                    ],
                  },
                ],
                "**No money:** cards have no money value. They aren’t bought or sold outside the game, and they can’t be exchanged for latitas or for anything outside it.",
                [
                  "**Both phones are trusted:** the phones make the trade between themselves, with no server checking it.",
                  {
                    list: [
                      "We can’t verify which cards the other player has, or undo a trade.",
                      "If the connection drops right as a trade is accepted, it may be made on only one phone, and we have no way to restore it.",
                    ],
                  },
                ],
                [
                  "**Duels:**",
                  {
                    list: [
                      "the phone that invites to the duel referees it;",
                      "if the connection drops and doesn’t come back within a minute, the duel has no winner and counts for no one;",
                      "leaving is losing, as in any duel.",
                    ],
                  },
                ],
                "**You may not** use a name that offends other people, or modify the game or its data to trade cards you don’t have.",
              ],
            },
            { subheading: "“La juntada”: a table of three to six" },
            "“La juntada” is a match of three to six on one Sillón: against the house cats, on your phone, or with friends who are nearby, each from their own phone and without the internet. It’s optional.",
            {
              list: [
                "**Whoever sets the table** chooses its rules (the house event, whether temperaments and the clock are on, and whether each person plays with a starter deck the table lends or with their own), decides who sits and can remove someone. Their phone deals and referees the match.",
                [
                  "**If someone leaves:**",
                  {
                    list: [
                      "whoever gets up in the middle of a match loses it, and the others play on without that person;",
                      "whoever loses the connection doesn’t cut it: after a minute, their seat passes by itself until they come back;",
                      "if whoever set the table closes it, or their connection doesn’t come back, the match ends with no winner and counts for no one.",
                    ],
                  },
                ],
                "**What it gives:** a table pays latitas like a duel against the AI. It doesn’t count for the ladder, for the “El barrio” league or for achievements.",
                "**The phones are trusted:** the phones play the match between themselves, with no server checking it. We can’t verify the others’ cards or review a match.",
                "**Among people who know each other:** there are no reports or blocks, because those at the table are people who are nearby and whom whoever set it chose to seat. The same rules apply: you may not use a name that offends other people, or modify the game or its data.",
              ],
            },
          ],
        },
        {
          heading: "8. “El barrio”: online duels",
          body: [
            "“El barrio” is the online duel against other people, with a league. It’s optional, and to play you need the internet and Google Play Games. The first time you enter, the game shows you its rules: accepting them is also accepting this section.",
            {
              list: [
                [
                  "**The barrio’s rules:**",
                  {
                    list: [
                      "your rivals see your name: nothing offensive, no personal data, yours or anyone else’s, and don’t pretend to be another person, the game or its team;",
                      "play every duel to the end: leaving, or letting your time run out, is losing;",
                      "don’t use a modified game or phone, or any other way of playing with cards you don’t have.",
                    ],
                  },
                ],
                "**Your name:** a filter checks it before showing it, and it may reject it. We may also ask you to change it. If several players report it, it’s hidden until we review it.",
                "**Reporting and blocking:** at the end of a duel, you can report your rival’s name or block them. A blocked rival won’t be matched with you again until you unblock them from your profile.",
                "**Moderation:** we review the reports. If someone doesn’t follow these rules, we may hide their name, ask them to change it or suspend them from “El barrio”, for a while or for good. The rest of the game keeps working the same for them. If you think we made a mistake, write to us.",
                "**Verification:** each search for a rival goes through Google Play Integrity. If Google can’t verify that the game is the one from Google Play, or that the phone hasn’t been modified, you can’t play online. The rest of the game, with “Visita” and “La juntada”, stays the same.",
                "**The league:** winning adds points and losing takes them away, without ever dropping below the best division you reached. Each new division gives its reward only once.",
                [
                  "**Availability:**",
                  {
                    list: [
                      "“El barrio” depends on our server, which may be unavailable because of maintenance, updates or failures;",
                      "if the server cuts a duel, that duel has no winner and doesn’t count;",
                      "to play online you need the latest version of the game;",
                      "we may change “El barrio” or stop offering it, and the rest of the game keeps working.",
                    ],
                  },
                ],
                "**Your data:** what our server stores, for how long and how to delete it is in the [Privacy Policy](https://hernan-hawryluk.vercel.app/privacy/duenos-del-sillon).",
              ],
            },
          ],
        },
        {
          heading: "9. Changes to the game",
          body: [
            "To improve the game, we may change cards, rules, prices and content, or add and remove features. New prices apply to future purchases, never to ones already made. If we stop offering the game on Google Play, the copy you already have installed keeps working offline, except “El barrio”, which needs our server.",
          ],
        },
        {
          heading: "10. Liability",
          body: [
            {
              list: [
                "We do our best to make the game work well, but we can’t guarantee it will always be free of errors, especially in this beta version.",
                "Other players choose their own names. We filter them and review the reports, but we can’t guarantee that none of them will bother you.",
                "To the extent permitted by law, we are not liable for indirect damages, such as data loss caused by uninstalling the game, by device failures or by the Google Play Games service.",
                "Nothing in these terms limits the rights that the consumer protection law of your country gives you, or our liability in cases where the law doesn’t allow it to be limited.",
              ],
            },
          ],
        },
        {
          heading: "11. Governing law and complaints",
          body: [
            "These terms are governed by the laws of Argentina.",
            "If you are a consumer and live in another country, you keep the protection given by the mandatory rules of your country, and you can bring a claim before its courts. This includes the European Union and the United Kingdom.",
            "Before making any complaint, write to us: we reply as soon as possible, and within 14 days at most.",
          ],
        },
        {
          heading: "12. Changes to these terms",
          body: [
            "If we change these terms, the new version will be on this same page, with its date. If the change is important, we’ll also announce it in the game or on its Google Play listing. Purchases already made remain governed by the terms in force when they were made.",
          ],
        },
        {
          heading: "13. Contact",
          body: [
            "For questions, problems with a purchase or complaints: **hernanhawryluk@gmail.com**.",
          ],
        },
      ],
    },
    es: {
      title: "Condiciones del servicio",
      intro: [
        "Estas condiciones explican las reglas para usar Dueños del sillón y para comprar dentro del juego. Las escribimos para que se entiendan; si algo no queda claro, escribinos.",
      ],
      sections: [
        {
          heading: "1. Quién ofrece el juego",
          body: [
            "Dueños del sillón lo desarrolla y lo ofrece **Hernán Hawryluk**, que actúa como comerciante (*trader*) según las normas de protección al consumidor de la Unión Europea y del Reino Unido.",
            {
              list: [
                "**Correo:** hernanhawryluk@gmail.com",
                "**Teléfono:** +5491130471861",
              ],
            },
            "En estas condiciones, «nosotros» es quien ofrece el juego, y «vos», quien lo usa.",
          ],
        },
        {
          heading: "2. Aceptación",
          body: [
            "Al instalar o usar el juego aceptás estas condiciones y la [Política de privacidad](https://hernan-hawryluk.vercel.app/privacy/duenos-del-sillon). Si no estás de acuerdo, no lo uses. Las condiciones de Google Play también se aplican a la descarga y a las compras.",
            "El juego está en **versión de prueba**: puede tener errores y va a cambiar mientras lo terminamos.",
          ],
        },
        {
          heading: "3. Edad",
          body: [
            "El juego es para personas de **13 años o más**. Si sos menor de edad según la ley de tu país, necesitás el permiso de tu madre, padre o tutor para hacer compras.",
          ],
        },
        {
          heading: "4. Licencia de uso",
          body: [
            "Te damos un permiso personal, gratuito, no exclusivo e intransferible para instalar el juego y usarlo en tus dispositivos, para tu entretenimiento y sin fines comerciales.",
            {
              list: [
                "El juego y todo su contenido (cartas, ilustraciones, textos, música, sonidos y código) son nuestros o los usamos con permiso. La licencia no te da ningún derecho sobre ellos fuera del juego.",
                "No podés copiar, vender, alquilar ni distribuir el juego, ni modificarlo, descompilarlo o alterarlo, salvo en lo que la ley te lo permita expresamente.",
                "No podés usar el juego para obtener compras sin pagarlas, ni para engañar a otras personas.",
              ],
            },
          ],
        },
        {
          heading: "5. Latitas y compras dentro del juego",
          body: [
            { subheading: "Qué son las latitas" },
            "Las **latitas** son la moneda del juego. Se ganan jugando (la historia, los duelos, los acertijos y los logros) y también se pueden comprar. Sirven para comprar sobres de cartas, mazos de prueba, temperamentos y cosméticos dentro del juego, y nada más:",
            {
              list: [
                "no tienen valor en dinero, no se pueden cambiar por dinero ni por nada fuera del juego;",
                "no se pueden transferir a otra persona, y a otro teléfono solo pasan con la copia de Google Play Juegos (ver la sección 6);",
                "no vencen mientras tengas el juego instalado.",
              ],
            },
            { subheading: "Qué se puede comprar" },
            {
              table: {
                head: ["Producto", "Qué recibís"],
                rows: [
                  ["Puñadito de latitas", "250 latitas"],
                  ["Bolsa de latitas", "1.500 latitas"],
                  [
                    "Apoyá el juego",
                    "750 latitas, el título «Mecenas del sillón» y un marco dorado para tu retrato",
                  ],
                ],
              },
            },
            "El precio final, con los impuestos que correspondan, lo ves en Google Play antes de confirmar cada compra. El pago lo procesa **Google Play**: nunca vemos tus datos de pago. Lo comprado no da ventajas en los duelos: todas las cartas y todo lo que se juega se consigue gratis jugando.",
            { subheading: "Sobres, mazos y cartas brillantes" },
            {
              list: [
                "**Los sobres** traen cartas al azar. Antes de comprar uno, la Tienda dice qué puede traer, cómo funciona la protección contra cartas repetidas y en cuántos sobres llega, como mucho, la próxima carta brillante.",
                "**Las cartas no se venden sueltas.** Los mazos de prueba sí se venden, y pagás solo las cartas que te faltan.",
                "**La fusión:** cuatro copias de una carta se pueden fusionar en una copia brillante. Es opcional, el juego te pregunta antes, y no se deshace.",
              ],
            },
            { subheading: "Entrega" },
            "Lo comprado llega al juego **apenas Google Play confirma el pago**. Si elegiste un medio de pago que se acredita más tarde (por ejemplo, en efectivo), llega cuando se acredita, la próxima vez que abras el juego.",
            { subheading: "Derecho de desistimiento" },
            "Si vivís en la Unión Europea o en el Reino Unido, en general tenés 14 días para desistir de una compra a distancia. Ese derecho **no se aplica al contenido digital que se entrega de inmediato**, una vez que diste tu consentimiento expreso para que se entregue enseguida y reconociste que así lo perdés.",
            "Al confirmar una compra en el juego, pedís que la entrega empiece en ese momento y aceptás que, una vez entregada, ya no podés desistir de ella. Esto no afecta tus derechos si lo que compraste no llega o no funciona como se describe: en ese caso, escribinos.",
            { subheading: "Reembolsos" },
            {
              list: [
                "**A Google Play:** podés pedirlos según sus políticas, desde tu historial de pedidos.",
                "**A nosotros:** si algo salió mal con una compra, escribinos y lo resolvemos con vos.",
                "**Latitas ya gastadas:** las que se usaron en sobres o cosméticos no se devuelven, salvo que la ley diga otra cosa.",
              ],
            },
          ],
        },
        {
          heading: "6. Dónde se guarda tu progreso",
          body: [
            "El juego no tiene cuentas propias. **Tu progreso se guarda en tu teléfono:** tu colección, tus mazos, tu progreso y tus latitas, también las compradas. Solo tu liga de «El barrio» la lleva nuestro servidor (ver la sección 8).",
            {
              list: [
                [
                  "**Si conectás Google Play Juegos** (es opcional), una copia de tu progreso queda también en tu cuenta de Google, y se actualiza cuando salís del juego. En otro teléfono, el juego te ofrece recuperarla.",
                  {
                    list: [
                      "Recuperarla reemplaza lo que hay en ese teléfono, y eso no se deshace: por eso siempre te pregunta antes, y te muestra qué tiene cada lado.",
                      "Las compras hechas en ese teléfono desde la versión 0.5.0 se conservan. Las de antes se reemplazan con lo demás, salvo que la copia ya las tenga.",
                      "Si jugás en dos teléfonos, sus progresos no se juntan: el que tiene menos puede recuperar la copia del otro.",
                      "Esa copia depende del servicio de Google: nosotros no la tenemos ni podemos recuperarla por vos.",
                    ],
                  },
                ],
                "**Si no conectaste Play Juegos** y desinstalás el juego, borrás sus datos o cambiás de teléfono, todo eso se pierde.",
                "Nosotros no tenemos una copia y **no podemos recuperarlo**.",
                "Una compra que Google Play confirmó pero que el juego todavía no entregó llega la próxima vez que lo abras.",
              ],
            },
            "Más detalles en la [Política de privacidad](https://hernan-hawryluk.vercel.app/privacy/duenos-del-sillon).",
          ],
        },
        {
          heading: "7. «Visita» y «La juntada»: con quienes están al lado",
          body: [
            { subheading: "«Visita»: duelos y cambios" },
            "«Visita» conecta tu teléfono con el de alguien que está al lado, sin internet, para jugar un duelo o cambiar cartas. Es opcional.",
            {
              list: [
                [
                  "**Los cambios:**",
                  {
                    list: [
                      "una carta por otra del mismo tipo (la misma rareza y el mismo brillo), hasta 5 cartas por día;",
                      "los dos ven las dos cartas y los dos lo aceptan;",
                      "una vez hecho, no se deshace.",
                    ],
                  },
                ],
                "**Sin dinero:** las cartas no tienen valor en dinero. No se compran ni se venden fuera del juego, y no se cambian por latitas ni por nada fuera de él.",
                [
                  "**Se confía en los dos teléfonos:** el cambio lo hacen los teléfonos entre sí, sin un servidor que lo controle.",
                  {
                    list: [
                      "No podemos verificar qué cartas tiene el otro, ni deshacer un cambio.",
                      "Si la conexión se corta justo al aceptar, el cambio puede quedar hecho en un solo teléfono, y no tenemos cómo reponerlo.",
                    ],
                  },
                ],
                [
                  "**Los duelos:**",
                  {
                    list: [
                      "el teléfono que invita al duelo lo arbitra;",
                      "si la conexión se corta y no vuelve en un minuto, el duelo no tiene ganador y no cuenta para nadie;",
                      "abandonar es perder, como en cualquier duelo.",
                    ],
                  },
                ],
                "**No podés** usar un nombre que ofenda a otras personas, ni modificar el juego o sus datos para cambiar cartas que no tenés.",
              ],
            },
            { subheading: "«La juntada»: una mesa de tres a seis" },
            "«La juntada» es una partida de tres a seis en un mismo Sillón: contra los gatos de la casa, en tu teléfono, o con amigos que están cerca, cada uno desde el suyo y sin internet. Es opcional.",
            {
              list: [
                "**Quien arma la mesa** elige sus reglas (el evento de la casa, si se juega con temperamentos y con reloj, y si cada persona juega con un mazo inicial que presta la mesa o con el suyo), decide quién se sienta y puede sacar a alguien. Su teléfono reparte y arbitra la partida.",
                [
                  "**Si alguien se va:**",
                  {
                    list: [
                      "quien se levanta en medio de una partida la pierde, y los demás la siguen sin esa persona;",
                      "quien se queda sin conexión no la corta: pasado un minuto, su asiento pasa solo hasta que vuelva;",
                      "si quien armó la mesa la cierra, o su conexión no vuelve, la partida termina sin ganador y no cuenta para nadie.",
                    ],
                  },
                ],
                "**Qué da:** una mesa paga latitas como un duelo contra la IA. No cuenta para la escalera, para la liga de «El barrio» ni para los logros.",
                "**Se confía en los teléfonos:** la partida la juegan los teléfonos entre sí, sin un servidor que la controle. No podemos verificar las cartas de los demás ni revisar una partida.",
                "**Entre personas que se conocen:** no hay denuncias ni bloqueos, porque se sientan a la mesa quienes están cerca y quien la armó quiso sentar. Valen las mismas reglas: no podés usar un nombre que ofenda a otras personas, ni modificar el juego o sus datos.",
              ],
            },
          ],
        },
        {
          heading: "8. «El barrio»: duelos en línea",
          body: [
            "«El barrio» es el duelo por internet contra otras personas, con una liga. Es opcional, y para jugar necesitás internet y Google Play Juegos. La primera vez que entrás, el juego te muestra sus reglas: aceptarlas es aceptar también esta sección.",
            {
              list: [
                [
                  "**Las reglas del barrio:**",
                  {
                    list: [
                      "tu nombre lo ven tus rivales: nada ofensivo, ningún dato personal, tuyo o de otros, y no te hagas pasar por otra persona, por el juego ni por su gente;",
                      "jugá cada duelo hasta el final: abandonar, o dejar que se acabe el tiempo, es perder;",
                      "no uses un juego o un teléfono modificados, ni otra forma de jugar con cartas que no tenés.",
                    ],
                  },
                ],
                "**Tu nombre:** un filtro lo revisa antes de mostrarlo, y puede rechazarlo. Nosotros también podemos pedirte que lo cambies. Si varios jugadores lo denuncian, queda oculto hasta que lo revisemos.",
                "**Denunciar y bloquear:** al terminar un duelo, podés denunciar el nombre de tu rival o bloquearlo. Un rival bloqueado no te vuelve a tocar hasta que lo desbloquees desde tu perfil.",
                "**La moderación:** revisamos las denuncias. Si alguien no respeta estas reglas, podemos ocultar su nombre, pedirle que lo cambie o suspenderlo de «El barrio», por un tiempo o para siempre. El resto del juego le sigue funcionando igual. Si creés que nos equivocamos, escribinos.",
                "**La verificación:** cada búsqueda de rival pasa por Google Play Integrity. Si Google no puede verificar que el juego es el de Google Play, o que el teléfono no fue modificado, no se puede jugar en línea. El resto del juego, con «Visita» y «La juntada», sigue igual.",
                "**La liga:** ganar suma puntos y perder resta, sin bajar nunca de la mejor división que alcanzaste. Cada división nueva da su premio una sola vez.",
                [
                  "**La disponibilidad:**",
                  {
                    list: [
                      "«El barrio» depende de nuestro servidor, que puede no estar disponible por mantenimiento, por actualizaciones o por fallas;",
                      "si el servidor corta un duelo, ese duelo no tiene ganador y no cuenta;",
                      "para jugar en línea hace falta la versión más reciente del juego;",
                      "podemos cambiar «El barrio» o dejar de ofrecerlo, y el resto del juego sigue funcionando.",
                    ],
                  },
                ],
                "**Tus datos:** qué guarda nuestro servidor, cuánto tiempo y cómo borrarlo está en la [Política de privacidad](https://hernan-hawryluk.vercel.app/privacy/duenos-del-sillon).",
              ],
            },
          ],
        },
        {
          heading: "9. Cambios en el juego",
          body: [
            "Para mejorar el juego podemos cambiar cartas, reglas, precios y contenido, o agregar y quitar funciones. Los precios nuevos rigen para las compras futuras, nunca para las ya hechas. Si dejamos de ofrecer el juego en Google Play, el que ya tenés instalado sigue funcionando sin conexión, salvo «El barrio», que necesita nuestro servidor.",
          ],
        },
        {
          heading: "10. Responsabilidad",
          body: [
            {
              list: [
                "Hacemos lo posible para que el juego funcione bien, pero no podemos garantizar que esté siempre libre de errores, sobre todo en esta versión de prueba.",
                "Los nombres de los otros jugadores los eligen ellos. Los filtramos y revisamos las denuncias, pero no podemos garantizar que ninguno moleste.",
                "En la medida en que la ley lo permita, no respondemos por daños indirectos, como la pérdida de datos causada por desinstalar el juego, por fallas del dispositivo o por el servicio de Google Play Juegos.",
                "Nada de estas condiciones limita los derechos que te da la ley de protección al consumidor de tu país, ni nuestra responsabilidad en los casos en que la ley no permite limitarla.",
              ],
            },
          ],
        },
        {
          heading: "11. Ley aplicable y reclamos",
          body: [
            "Estas condiciones se rigen por las leyes de la República Argentina.",
            "Si sos consumidor y vivís en otro país, conservás la protección que te dan las normas obligatorias de tu país, y podés reclamar ante sus tribunales. Esto incluye la Unión Europea y el Reino Unido.",
            "Antes de cualquier reclamo, escribinos: respondemos lo antes posible, y como máximo en 14 días.",
          ],
        },
        {
          heading: "12. Cambios en estas condiciones",
          body: [
            "Si cambiamos estas condiciones, la versión nueva va a estar en esta misma página, con su fecha. Si el cambio es importante, también lo avisamos en el juego o en su ficha de Google Play. Las compras ya hechas siguen rigiéndose por las condiciones vigentes al momento de hacerlas.",
          ],
        },
        {
          heading: "13. Contacto",
          body: [
            "Para preguntas, problemas con una compra o reclamos: **hernanhawryluk@gmail.com**.",
          ],
        },
      ],
    },
  },
};

export default duenosDelSillon;
