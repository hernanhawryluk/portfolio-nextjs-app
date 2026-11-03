import type { AppPrivacyPolicy } from "@/lib/types";

const leeme: AppPrivacyPolicy = {
  slug: "leeme",
  appName: "Léeme – Escuchá y aprobá",
  lastUpdated: "2026-11-03",
  contactEmail: "hernanhawryluk@gmail.com",
  content: {
    en: {
      intro: [
        "Léeme is an app for studying by listening: it reads aloud the texts and documents you import. It works entirely on your phone and doesn't use the internet.",
      ],
      sections: [
        {
          heading: "What data we collect",
          body: [
            "None. Léeme has no servers, accounts, ads, usage analytics, or crash reporting of its own. The app doesn't even have permission to connect to the internet, so it can't send anything off your phone.",
          ],
        },
        {
          heading: "What the app stores on your phone",
          body: [
            {
              list: [
                "The documents you import (PDF, Word, text files, or pasted text), their processed text, and your listening progress.",
                "Your playlists, your replacement dictionary, and your settings.",
                "The audio files you export.",
              ],
            },
            "Everything stays in the app's private storage. No one else has access to it, except for what you choose to share or save outside the app (for example, an audio file in the Music folder or a backup in a location you choose). Android doesn't include this data in its cloud backups.",
          ],
        },
        {
          heading: "Voice",
          body: [
            "Léeme uses the text-to-speech engine installed on your phone and only offers voices that work offline. Text is converted to speech on the device. The speech engine is a separate app (for example, Google's) and has its own privacy policy.",
          ],
        },
        {
          heading: "Permissions",
          body: [
            {
              list: [
                {
                  label: "Notifications",
                  text: "to let you know when an audio file has finished generating.",
                },
                {
                  label: "Foreground services",
                  text: "to keep reading with the screen off and to generate audio files in the background.",
                },
                {
                  label: "Keep the phone awake",
                  text: "so reading doesn't stop during the silences between sentences while the screen is off.",
                },
                {
                  label: "Storage (Android 8 and 9 only)",
                  text: "to save audio files to the Music folder.",
                },
              ],
            },
          ],
        },
        {
          heading: "How to delete your data",
          body: [
            "You can delete documents, playlists, and audio files from within the app. If you uninstall Léeme, Android deletes all of its data from your phone. Backups and audio files you saved outside the app stay where you saved them.",
          ],
        },
        {
          heading: "Changes to this policy",
          body: [
            "If the app changes what it does with your data, this page will be updated and will show the new date.",
          ],
        },
      ],
    },
    es: {
      intro: [
        "Léeme es una app para estudiar escuchando: lee en voz alta los textos y documentos que vos importás. Funciona completamente en tu teléfono y no usa internet.",
      ],
      sections: [
        {
          heading: "Qué datos recopilamos",
          body: [
            "Ninguno. Léeme no tiene servidores, cuentas, publicidad, estadísticas de uso ni informes de errores propios. La app ni siquiera tiene permiso para conectarse a internet, así que no puede enviar nada fuera del teléfono.",
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
            "Léeme usa el motor de voz instalado en tu teléfono y solo ofrece voces que funcionan sin conexión. El texto se convierte en voz dentro del dispositivo. El motor de voz es otra app (por ejemplo, la de Google) y tiene su propia política de privacidad.",
          ],
        },
        {
          heading: "Permisos",
          body: [
            {
              list: [
                {
                  label: "Notificaciones",
                  text: "para avisarte cuándo termina de generarse un audio.",
                },
                {
                  label: "Servicios en primer plano",
                  text: "para seguir leyendo con la pantalla apagada y para generar audios en segundo plano.",
                },
                {
                  label: "Mantener el teléfono activo",
                  text: "para que la lectura no se corte en los silencios entre oraciones con la pantalla apagada.",
                },
                {
                  label: "Almacenamiento (solo Android 8 y 9)",
                  text: "para guardar audios en la carpeta Música.",
                },
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
      ],
    },
  },
};

export default leeme;
