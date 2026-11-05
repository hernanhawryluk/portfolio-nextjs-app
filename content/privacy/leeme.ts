import type { LegalDocument } from "@/lib/types";

const leeme: LegalDocument = {
  slug: "leeme",
  appName: "Léeme – Escuchá y aprobá",
  lastUpdated: "2026-11-04",
  content: {
    en: {
      title: "Privacy Policy",
      intro: [
        "Léeme is an app for studying by listening: it reads aloud the texts and documents you import. It works on your phone and has no permission to connect to the internet.",
      ],
      sections: [
        {
          heading: "What data we collect",
          body: [
            "None. Léeme has no servers, accounts, ads, usage analytics or crash reports of its own. The app doesn’t even have permission to connect to the internet, so it can’t send anything off your phone. What other apps that Léeme uses do, such as the text-to-speech engine or Google Play, is governed by their own policies.",
          ],
        },
        {
          heading: "What the app stores on your phone",
          body: [
            {
              list: [
                "The documents you import (PDF, Word, text or pasted text), their processed text and your listening progress.",
                "Your playlists, your replacement dictionary and your settings.",
                "The audio files you export.",
              ],
            },
            "Everything stays in the app’s private storage. No one else has access to it, except what you choose to share or save outside the app (for example, an audio file in the Music folder or a backup in a place you pick). Android doesn’t include this data in its cloud backups.",
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
          heading: "Voluntary contributions",
          body: [
            "If you want, you can make a voluntary contribution from Settings. Payment is processed by Google Play with your Google account, under its own privacy policy. Léeme doesn’t see your payment details: it only receives Google Play’s confirmation, on your phone, and doesn’t send it anywhere. A contribution doesn’t unlock anything.",
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
          body: ["hernanhawryluk@gmail.com"],
        },
      ],
    },
    es: {
      title: "Política de privacidad",
      intro: [
        "Léeme es una app para estudiar escuchando: lee en voz alta los textos y documentos que vos importás. Funciona en tu teléfono y no tiene permiso para conectarse a internet.",
      ],
      sections: [
        {
          heading: "Qué datos recopilamos",
          body: [
            "Ninguno. Léeme no tiene servidores, cuentas, publicidad, estadísticas de uso ni informes de errores propios. La app ni siquiera tiene permiso para conectarse a internet, así que no puede enviar nada fuera del teléfono. Lo que hagan otras apps que Léeme usa, como el motor de voz o Google Play, se rige por sus propias políticas.",
          ],
        },
        {
          heading: "Qué guarda la app en tu teléfono",
          body: [
            {
              list: [
                "Los documentos que importás (PDF, Word, texto o texto pegado), su texto procesado y tu progreso de escucha.",
                "Tus listas de reproducción, tu diccionario de reemplazos y tus ajustes.",
                "Los audios que exportes.",
              ],
            },
            "Todo queda en el almacenamiento privado de la app. Nadie más tiene acceso, salvo lo que vos decidas compartir o guardar fuera de ella (por ejemplo, un audio en la carpeta Música o una copia de seguridad en el lugar que elijas). Android no incluye estos datos en sus copias de seguridad en la nube.",
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
          heading: "Contribuciones voluntarias",
          body: [
            "Si querés, podés hacer una contribución voluntaria desde Ajustes. El pago lo procesa Google Play con tu cuenta de Google, bajo su propia política de privacidad. Léeme no ve tus datos de pago: solo recibe la confirmación de Google Play, en el teléfono, y no la envía a ningún lado. La contribución no desbloquea nada.",
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
          body: ["hernanhawryluk@gmail.com"],
        },
      ],
    },
  },
};

export default leeme;
