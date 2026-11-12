import type { LegalDocument } from "@/lib/types";

const leeme: LegalDocument = {
  slug: "leeme",
  appName: "Léeme",
  lastUpdated: "2026-11-12",
  content: {
    en: {
      title: "Privacy Policy",
      intro: [
        "Léeme is an Android app by Hernan Hawryluk for studying by listening: it reads aloud the texts and documents you import. On Google Play it’s called “Léeme: PDF Text to Speech”. It works on your phone and has no permission to connect to the internet.",
      ],
      sections: [
        {
          heading: "What data the app collects",
          body: [
            "None, from anyone, minors included. Léeme has no servers, accounts, ads, usage analytics or crash reports of its own. The app doesn’t even have permission to connect to the internet, so it can’t send anything off your phone. What other apps that Léeme uses do, such as the text-to-speech engine or Google Play, is governed by their own policies.",
            "As the developer, I only receive what you write to me and what Google Play reports about contributions (explained below).",
          ],
        },
        {
          heading: "What the app stores on your phone",
          body: [
            {
              list: [
                "The documents you import (PDF, Word, EPUB books, text or pasted text), including the ones you open, share or drag from other apps, their processed text and your listening progress.",
                "Your playlists, the sentences you mark, your replacement dictionary and your settings.",
                "If you choose your own background music, a copy of that file.",
                "The audio files you export.",
              ],
            },
            "If you import photos, the app only uses them to read their text on your phone and deletes them as soon as it has.",
            "Everything stays in the app’s private storage, which Android doesn’t let other apps into. No one else has access to it, except what you choose to share or save outside the app (for example, an audio file in the Music folder or a backup in a place you pick). Android doesn’t include this data in its cloud backups or move it to a new phone. The backup you export is an unencrypted .zip file: keep it somewhere only you can reach.",
          ],
        },
        {
          heading: "Voice",
          body: [
            "To read aloud, Léeme passes the text to your phone’s text-to-speech engine. The engine is a separate app (for example, Google’s) and has its own privacy policy.",
            "Léeme only offers the voices the engine reports as installed on the phone and available offline; voices that need the internet aren’t shown, either for listening or for exporting. According to what the engine reports, those voices turn the text into speech on the phone. To download new voices, the engine may need the internet: that download is done by the engine, not by Léeme.",
          ],
        },
        {
          heading: "Playback controls and Android Auto",
          body: [
            "While you listen, Android shows the title of what’s playing in the notification, on the lock screen and on whatever controls playback, such as your headphones, a watch or other control apps.",
            "If you connect your phone to a car with Android Auto, the car shows the titles of your library and your playlists so you can choose what to listen to. If you ask for a document by voice, the voice assistant (for example, Google’s) understands what you say and passes the search text to Léeme, which looks for it on the phone. Android Auto and the assistant are governed by their own privacy policies.",
          ],
        },
        {
          heading: "Rating the app",
          body: [
            "After you’ve listened to a few documents to the end, Léeme may ask Google Play to show you its card for rating the app. The card belongs to Google Play: your rating and your review are received by Google with your account and published under its policies. Léeme doesn’t see whether you rated it or what you wrote; it only stores on the phone when it offered the card, so it doesn’t do it again for four months.",
          ],
        },
        {
          heading: "Voluntary contributions",
          body: [
            "If you want, you can make a voluntary contribution from Settings. Payment is processed by Google Play with your Google account, under its own privacy policy. The app doesn’t see your payment details: it only receives Google Play’s confirmation, on your phone, and doesn’t send it anywhere. A contribution doesn’t unlock anything.",
            "Like it does for any seller, Google Play reports each contribution to me with the details I need to receive it, pay taxes and give refunds (for example, the order number, the amount and the country). They don’t include your card details.",
          ],
        },
        {
          heading: "If you write to me",
          body: [
            "If you write to me, for example to ask for a refund, I use your email address and what you tell me only to answer you, and I don’t pass it on to anyone. You can ask me to correct or delete that information. Argentina’s Agency for Access to Public Information (Agencia de Acceso a la Información Pública) is the supervisory authority for Law 25.326 on personal data protection.",
          ],
        },
        {
          heading: "Permissions",
          body: [
            {
              list: [
                "**Notifications:** to let you know when an audio file has finished being created.",
                "**Foreground services:** to keep reading with the screen off and to create audio files in the background.",
                "**Keep the phone awake:** so reading doesn’t stop during the silences between sentences with the screen off.",
                "**Run at startup:** to resume creating an audio file that was pending when the phone restarted.",
                "**View network state:** added by the Android libraries the app uses to play audio and to work in the background. It only tells whether there’s a connection; it doesn’t allow connecting.",
                "**Storage (Android 8 and 9 only):** to save audio files to the Music folder.",
                "**Google Play billing:** for voluntary contributions. It lets the app ask the Play Store app for the payment; it doesn’t give internet access.",
              ],
            },
          ],
        },
        {
          heading: "How to delete your data",
          body: [
            "You can delete documents, playlists and audio files from the app. If you uninstall Léeme, Android deletes all its data from the phone. Backups and audio files you saved outside the app stay where you saved them.",
          ],
        },
        {
          heading: "Changes to this policy",
          body: [
            "If the app changes what it does with your data, this page will be updated and will show the new date.",
          ],
        },
        {
          heading: "Contact",
          body: ["Hernan Hawryluk — hernanhawryluk@gmail.com"],
        },
      ],
    },
    es: {
      title: "Política de privacidad",
      intro: [
        "Léeme es una app para Android de Hernan Hawryluk, para estudiar escuchando: lee en voz alta los textos y documentos que vos importás. En Google Play se llama «Léeme: leer PDF en voz alta». Funciona en tu teléfono y no tiene permiso para conectarse a internet.",
      ],
      sections: [
        {
          heading: "Qué datos recopila la app",
          body: [
            "Ninguno, de nadie, tampoco de menores de edad. Léeme no tiene servidores, cuentas, publicidad, estadísticas de uso ni informes de errores propios. La app ni siquiera tiene permiso para conectarse a internet, así que no puede enviar nada fuera del teléfono. Lo que hagan otras apps que Léeme usa, como el motor de voz o Google Play, se rige por sus propias políticas.",
            "Yo, como desarrollador, solo recibo lo que vos me escribas y lo que Google Play me informa sobre las contribuciones (más abajo lo explico).",
          ],
        },
        {
          heading: "Qué guarda la app en tu teléfono",
          body: [
            {
              list: [
                "Los documentos que importás (PDF, Word, libros EPUB, texto o texto pegado), también los que abrís, compartís o arrastrás desde otras apps, su texto procesado y tu progreso de escucha.",
                "Tus listas de reproducción, las oraciones que marcás, tu diccionario de reemplazos y tus ajustes.",
                "Si elegís tu propia música de fondo, una copia de ese archivo.",
                "Los audios que exportes.",
              ],
            },
            "Si importás fotos, la app solo las usa para leer su texto en el teléfono y las borra apenas lo lee.",
            "Todo queda en el almacenamiento privado de la app, al que Android no deja entrar a otras apps. Nadie más tiene acceso, salvo lo que vos decidas compartir o guardar fuera de ella (por ejemplo, un audio en la carpeta Música o una copia de seguridad en el lugar que elijas). Android no incluye estos datos en sus copias de seguridad en la nube ni los pasa a un teléfono nuevo. La copia de seguridad que exportás es un archivo .zip sin cifrar: guardala donde solo vos tengas acceso.",
          ],
        },
        {
          heading: "Voz",
          body: [
            "Para leer en voz alta, Léeme le pasa el texto al motor de voz de tu teléfono. El motor es otra app (por ejemplo, la de Google) y tiene su propia política de privacidad.",
            "Léeme solo ofrece las voces que el motor indica como instaladas en el teléfono y disponibles sin conexión; las voces que requieren internet no aparecen, ni para escuchar ni para exportar. Según lo que informa el motor, esas voces convierten el texto en voz dentro del teléfono. Para descargar voces nuevas, el motor puede necesitar internet: esa descarga la hace el motor, no Léeme.",
          ],
        },
        {
          heading: "Controles de reproducción y Android Auto",
          body: [
            "Mientras escuchás, Android muestra el título de lo que suena en la notificación, en la pantalla de bloqueo y en lo que controla la reproducción, como tus auriculares, un reloj u otras apps de controles.",
            "Si conectás el teléfono a un auto con Android Auto, el auto muestra los títulos de tu biblioteca y de tus listas para que elijas qué escuchar. Si pedís un apunte por voz, el asistente de voz (por ejemplo, el de Google) entiende lo que decís y le pasa a Léeme el texto de la búsqueda, que Léeme busca en el teléfono. Android Auto y el asistente se rigen por sus propias políticas de privacidad.",
          ],
        },
        {
          heading: "Calificar la app",
          body: [
            "Después de que escuches algunos documentos hasta el final, Léeme puede pedirle a Google Play que te muestre su tarjeta para calificar la app. La tarjeta es de Google Play: tu calificación y tu comentario los recibe Google con tu cuenta y se publican según sus políticas. Léeme no ve si calificaste ni qué escribiste; solo guarda en el teléfono cuándo te la ofreció, para no volver a hacerlo antes de cuatro meses.",
          ],
        },
        {
          heading: "Contribuciones voluntarias",
          body: [
            "Si querés, podés hacer una contribución voluntaria desde Ajustes. El pago lo procesa Google Play con tu cuenta de Google, bajo su propia política de privacidad. La app no ve tus datos de pago: solo recibe la confirmación de Google Play, en el teléfono, y no la envía a ningún lado. La contribución no desbloquea nada.",
            "Como a cualquier vendedor, Google Play me informa cada contribución con los datos que necesito para cobrarla, pagar los impuestos y hacer reembolsos (por ejemplo, el número de pedido, el monto y el país). No incluyen los datos de tu tarjeta.",
          ],
        },
        {
          heading: "Si me escribís",
          body: [
            "Si me escribís, por ejemplo para pedir un reembolso, uso tu correo y lo que me cuentes solo para responderte, y no se lo paso a nadie. Podés pedirme que corrija o borre esos datos. La Agencia de Acceso a la Información Pública es el órgano de control de la Ley 25.326 de protección de datos personales.",
          ],
        },
        {
          heading: "Permisos",
          body: [
            {
              list: [
                "**Notificaciones:** para avisarte cuándo termina de generarse un audio.",
                "**Servicios en primer plano:** para seguir leyendo con la pantalla apagada y para generar audios en segundo plano.",
                "**Mantener el teléfono activo:** para que la lectura no se corte en los silencios entre oraciones con la pantalla apagada.",
                "**Ejecutarse al iniciar el teléfono:** para retomar la generación de un audio que quedó pendiente al reiniciarlo.",
                "**Ver el estado de la red:** lo suman las bibliotecas de Android que usa la app para reproducir y para trabajar en segundo plano. Solo deja saber si hay conexión; no permite conectarse.",
                "**Almacenamiento (solo Android 8 y 9):** para guardar audios en la carpeta Música.",
                "**Facturación de Google Play:** para las contribuciones voluntarias. Permite pedirle el pago a la app Play Store; no da acceso a internet.",
              ],
            },
          ],
        },
        {
          heading: "Cómo borrar tus datos",
          body: [
            "Podés eliminar documentos, listas y audios desde la app. Si desinstalás Léeme, Android borra todos sus datos del teléfono. Las copias de seguridad y los audios que hayas guardado fuera de la app quedan donde los guardaste.",
          ],
        },
        {
          heading: "Cambios en esta política",
          body: [
            "Si la app cambia lo que hace con tus datos, esta página se actualizará y mostrará la nueva fecha.",
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
