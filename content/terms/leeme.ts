import type { LegalDocument } from "@/lib/types";

const leeme: LegalDocument = {
  slug: "leeme",
  appName: "Léeme",
  lastUpdated: "2026-11-12",
  content: {
    en: {
      title: "Terms of Service",
      intro: [
        "These terms explain the rules for using Léeme (on Google Play, “Léeme: PDF Text to Speech”), an Android app that reads aloud the texts and documents you import, and for making a voluntary contribution.",
        "[Withdrawal button (Botón de arrepentimiento)](mailto:hernanhawryluk@gmail.com?subject=Refund%20of%20a%20contribution%20to%20L%C3%A9eme): if you change your mind about a contribution, use it or write to me at hernanhawryluk@gmail.com within 14 calendar days of the payment. In the app it’s in Settings, as “Refund a contribution”. Details are in section 6.",
      ],
      sections: [
        {
          heading: "1. Who provides the app",
          body: [
            "Léeme is developed and provided by Hernan Hawryluk, an individual based in Argentina. You can write to me at hernanhawryluk@gmail.com. Google Play also shows my contact details on the app’s listing.",
          ],
        },
        {
          heading: "2. What Léeme is",
          body: [
            {
              list: [
                "It imports notes (pasted text, PDF, Word, EPUB books, TXT or photos), cleans them up and reads them aloud with the text-to-speech engine installed on your phone. It can also save the reading as an audio file.",
                "It is free: every feature is available without paying.",
                "It has no accounts, servers, ads or usage analytics, and it has no permission to connect to the internet.",
                "The voice comes from your phone’s text-to-speech engine, which is a separate app. Léeme only offers the voices the engine reports as installed on the phone and available offline; voices that need the internet aren’t shown. That’s why reading aloud and exporting work without internet. To download new voices, the engine itself may need a connection.",
                "How your data is handled is explained in the privacy policy: https://hernan-hawryluk.vercel.app/privacy/leeme.",
              ],
            },
          ],
        },
        {
          heading: "3. Permission to use",
          body: [
            "I give you permission to install and use Léeme on your devices, for your personal use. This permission is free, non-exclusive and personal: you can’t transfer it.",
            "You may not sell, rent or redistribute the app, or present it as your own. You also may not use it for anything illegal or that infringes other people’s rights.",
            "The Léeme name, its icon, its design and its code are mine, except for the third-party libraries it includes, which have their own licenses, and the piano recordings used as background music, which are in the public domain. Using the app doesn’t give you any rights over them.",
          ],
        },
        {
          heading: "4. Your documents and audio",
          body: [
            {
              list: [
                "Léeme claims no rights over the documents you import or the audio you create. The rights to that content remain with their respective owners.",
                "Your documents and audio stay on your phone. I don’t see or receive them.",
                "Use the app with content you have the right to use. Turning a text into audio doesn’t give you any rights over it: to share or publish an audio file, you need permission from whoever holds the rights to the text, under copyright law. The voices come from your phone’s text-to-speech engine, which may have its own terms of use.",
                "If you uninstall the app or lose your phone, its data is lost with it: I don’t have any copy. To keep it, use Settings → Backup.",
              ],
            },
          ],
        },
        {
          heading: "5. What to expect from the app",
          body: [
            {
              list: [
                "Léeme is a study tool: it helps you study, but it doesn’t guarantee exam results. “Listen, Learn & Pass” is its motto, not a promise.",
                "Importing can make mistakes (especially when recognizing the text of scanned documents), and pronunciation depends on the text-to-speech engine. If something is important, check it in the original document.",
                "The durations the app shows are estimates.",
                "I do my best to make the app work well and I fix the bugs I find. Some features depend on Android, the text-to-speech engine and Google Play, which I don’t control, and may vary from phone to phone.",
                "New versions may change or improve features.",
              ],
            },
          ],
        },
        {
          heading: "6. Voluntary contributions",
          body: [
            {
              list: [
                "In Settings → “Enjoying this app?” you can make a voluntary contribution to thank the work behind the app. It is optional.",
                "It doesn’t unlock any features, content or advantages: the app is the same whether you contribute or not. It isn’t a donation to a charity, and it isn’t tax-deductible.",
                "Payment is processed by Google Play with your Google account, under Google’s terms and privacy policy. Before you confirm, Google Play shows you the final price in your currency. I don’t see or store your payment details.",
                "By confirming the payment in Google Play, you accept these terms for that contribution.",
                "If you are a minor, you need permission from a parent or guardian to contribute.",
                [
                  "**If you change your mind,** you can ask for your money back in two ways:",
                  {
                    list: [
                      "from Google Play, under its refund policies;",
                      "with “Refund a contribution” in the app’s Settings or by writing to me at hernanhawryluk@gmail.com, within 14 calendar days of the payment. If you have it, include the order number from Google’s receipt (it starts with “GPA.”) so I can find it faster. Within 24 hours I’ll reply the same way with a code that identifies your request, and I’ll refund the full amount through Google Play. You don’t need to give a reason.",
                    ],
                  },
                  "If the law of your country gives you a longer period or more rights, those apply.",
                ],
              ],
            },
          ],
        },
        {
          heading: "7. Other services",
          body: [
            "The app uses services I don’t control, each with its own terms: your phone’s text-to-speech engine; Google Play, to install, update and rate the app and to pay for contributions; Android Auto and the voice assistant, if you listen in the car or ask for a document by voice; and the apps you open, share or drag documents from.",
          ],
        },
        {
          heading: "8. Stopping using the app",
          body: [
            "You can stop using Léeme whenever you want and uninstall it; when you do, Android deletes its data. If I ever stop offering it on Google Play, the copy you already have would keep working on your phone, because it doesn’t depend on any server, although it would no longer get updates.",
          ],
        },
        {
          heading: "9. Changes to these terms",
          body: [
            "If I change these terms, I’ll publish the new version on this page with its date and announce important changes in the release notes on Google Play. Each contribution is governed by the terms published on the day you make it: changes never apply to earlier contributions or reduce the rights you already have.",
          ],
        },
        {
          heading: "10. Governing law and complaints",
          body: [
            {
              list: [
                "These terms are governed by the laws of Argentina. If you live in another country, you are also protected by the consumer protection rules of your country that can’t be waived by contract.",
                "If you have a problem, please write to me first at hernanhawryluk@gmail.com and we’ll sort it out.",
                "You can also file a complaint with the consumer protection authority or the courts where you live.",
                "Nothing in these terms limits the rights that consumer protection laws give you.",
              ],
            },
          ],
        },
        {
          heading: "11. Languages",
          body: [
            "These terms are available in Spanish and English. If the two versions differ, the one more favorable to you applies.",
          ],
        },
        {
          heading: "Contact",
          body: ["Hernan Hawryluk — hernanhawryluk@gmail.com"],
        },
      ],
    },
    es: {
      title: "Condiciones del servicio",
      intro: [
        "Estas condiciones explican las reglas para usar Léeme (en Google Play, «Léeme: leer PDF en voz alta»), una app para Android que lee en voz alta los textos y documentos que importás, y para hacer una contribución voluntaria.",
        "[Botón de arrepentimiento](mailto:hernanhawryluk@gmail.com?subject=Arrepentimiento%20de%20una%20contribuci%C3%B3n%20a%20L%C3%A9eme): si te arrepentís de una contribución, tocalo o escribime a hernanhawryluk@gmail.com dentro de los 14 días corridos desde el pago. En la app está en Ajustes. Los detalles, en el punto 6.",
      ],
      sections: [
        {
          heading: "1. Quién ofrece la app",
          body: [
            "Léeme la desarrolla y la ofrece Hernan Hawryluk, una persona física con domicilio en la República Argentina. Podés escribirme a hernanhawryluk@gmail.com. Google Play también muestra mis datos de contacto en la ficha de la app.",
          ],
        },
        {
          heading: "2. Qué es Léeme",
          body: [
            {
              list: [
                "Importa apuntes (texto pegado, PDF, Word, libros EPUB, TXT o fotos), los limpia y los lee en voz alta con el motor de voz instalado en tu teléfono. También puede guardar la lectura como un archivo de audio.",
                "Es gratuita: todas sus funciones están disponibles sin pagar.",
                "No tiene cuentas, servidores, publicidad ni estadísticas de uso, y no tiene permiso para conectarse a internet.",
                "La voz la pone el motor de voz de tu teléfono, que es otra app. Léeme solo ofrece las voces que el motor indica como instaladas en el teléfono y disponibles sin conexión; las que requieren internet no aparecen. Por eso la lectura y la exportación funcionan sin internet. Para descargar voces nuevas, el motor sí puede necesitar conexión.",
                "Cómo se tratan tus datos lo explica la política de privacidad: https://hernan-hawryluk.vercel.app/privacy/leeme.",
              ],
            },
          ],
        },
        {
          heading: "3. Permiso de uso",
          body: [
            "Te doy permiso para instalar y usar Léeme en tus dispositivos, para tu uso personal. Es un permiso gratuito, no exclusivo y personal: no podés cederlo.",
            "No podés vender, alquilar ni redistribuir la app, ni presentarla como propia. Tampoco podés usarla para algo ilegal o que afecte los derechos de otras personas.",
            "El nombre Léeme, su ícono, su diseño y su código son míos, salvo las bibliotecas de terceros que incluye, que tienen sus propias licencias, y las grabaciones de piano de la música de fondo, que son de dominio público. Usar la app no te da derechos sobre ellos.",
          ],
        },
        {
          heading: "4. Tus documentos y audios",
          body: [
            {
              list: [
                "Léeme no reclama derechos sobre los documentos que importás ni sobre los audios que generás. Los derechos sobre esos contenidos siguen siendo de sus respectivos titulares.",
                "Los documentos y los audios quedan en tu teléfono. Yo no los veo ni los recibo.",
                "Usá la app con contenidos que tengas derecho a usar. Convertir un texto en audio no te da derechos sobre él: para compartir o publicar un audio necesitás el permiso de quien tenga los derechos del texto, según las leyes de propiedad intelectual. Las voces las pone el motor de voz de tu teléfono, que puede tener sus propias condiciones de uso.",
                "Si desinstalás la app o perdés el teléfono, sus datos se pierden con él: yo no tengo ninguna copia. Para no perderlos, usá Ajustes → Copia de seguridad.",
              ],
            },
          ],
        },
        {
          heading: "5. Qué esperar de la app",
          body: [
            {
              list: [
                "Léeme es una herramienta de estudio: ayuda a estudiar, pero no garantiza resultados en los exámenes. «Escuchá y aprobá» es su lema, no una promesa.",
                "La importación puede tener errores (sobre todo al reconocer el texto de documentos escaneados) y la pronunciación depende del motor de voz. Si algo es importante, revisalo en el documento original.",
                "Las duraciones que muestra la app son estimaciones.",
                "Hago lo posible para que la app funcione bien y corrijo los errores que encuentro. Algunas funciones dependen de Android, del motor de voz y de Google Play, que no controlo, y pueden variar según el teléfono.",
                "Las versiones nuevas pueden cambiar o mejorar las funciones.",
              ],
            },
          ],
        },
        {
          heading: "6. Contribuciones voluntarias",
          body: [
            {
              list: [
                "En Ajustes → «¿Te gusta esta aplicación?» podés hacer una contribución voluntaria para agradecer el desarrollo. Es opcional.",
                "No desbloquea funciones, contenido ni ventajas: la app es la misma contribuyas o no. Tampoco es una donación a una organización benéfica ni da derecho a deducciones impositivas.",
                "El pago lo procesa Google Play con tu cuenta de Google, según sus condiciones y su política de privacidad. Antes de confirmar, Google Play te muestra el precio final en tu moneda. Yo no veo ni guardo tus datos de pago.",
                "Al confirmar el pago en Google Play, aceptás estas condiciones para esa contribución.",
                "Si sos menor de edad, necesitás el permiso de tu madre, padre o tutor para contribuir.",
                [
                  "**Si te arrepentís,** podés pedir que te devuelva el dinero de dos maneras:",
                  {
                    list: [
                      "a Google Play, según sus políticas de reembolso;",
                      "con el «Botón de arrepentimiento» de la app (en Ajustes) o escribiéndome a hernanhawryluk@gmail.com, dentro de los 14 días corridos desde el pago. Si lo tenés, sumá el número de pedido del recibo de Google (empieza con «GPA.»), así lo encuentro más rápido. Dentro de las 24 horas te respondo por el mismo medio con un código que identifica tu pedido, y te devuelvo el monto completo a través de Google Play, sin que tengas que explicar el motivo.",
                    ],
                  },
                  "Si la ley de tu país te da un plazo más largo o más derechos, se aplican esos.",
                ],
              ],
            },
          ],
        },
        {
          heading: "7. Servicios de otros",
          body: [
            "La app usa servicios que no controlo, cada uno con sus propias condiciones: el motor de voz de tu teléfono; Google Play, para instalar, actualizar, calificar la app y pagar las contribuciones; Android Auto y el asistente de voz, si escuchás en el auto o pedís un apunte por voz; y las apps desde las que abrís, compartís o arrastrás documentos.",
          ],
        },
        {
          heading: "8. Dejar de usar la app",
          body: [
            "Podés dejar de usar Léeme cuando quieras y desinstalarla; al hacerlo, Android borra sus datos. Si algún día dejo de ofrecerla en Google Play, la app que ya tenés seguiría funcionando en tu teléfono, porque no depende de ningún servidor, aunque ya no reciba actualizaciones.",
          ],
        },
        {
          heading: "9. Cambios en estas condiciones",
          body: [
            "Si cambio estas condiciones, publico la versión nueva en esta página con su fecha y aviso los cambios importantes en las notas de la versión en Google Play. Cada contribución se rige por las condiciones publicadas el día en que la hacés: los cambios nunca se aplican a contribuciones anteriores ni reducen los derechos que ya tenés.",
          ],
        },
        {
          heading: "10. Ley aplicable y reclamos",
          body: [
            {
              list: [
                "Estas condiciones se rigen por las leyes de la República Argentina. Si vivís en otro país, también te protegen las normas de protección al consumidor de tu país que no pueden dejarse de lado por contrato.",
                "Si tenés un problema, escribime primero a hernanhawryluk@gmail.com y lo resolvemos.",
                "También podés reclamar ante la autoridad de defensa del consumidor o los tribunales de tu domicilio.",
                "Nada en estas condiciones limita los derechos que te dan las leyes de protección al consumidor.",
              ],
            },
          ],
        },
        {
          heading: "11. Idiomas",
          body: [
            "Estas condiciones están en español y en inglés. Si las dos versiones difieren en algo, vale la que te sea más favorable.",
          ],
        },
        {
          heading: "Contacto",
          body: ["Hernan Hawryluk — hernanhawryluk@gmail.com"],
        },
      ],
    },
  },
};

export default leeme;
