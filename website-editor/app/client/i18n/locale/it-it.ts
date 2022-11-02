const itIT = {
  it: {
    translation: {
      global: {
        yes: "si",
        no: "no",
        close: "chiudi",
        save: "salva",
        saving: "salvando",
        removing: "rimovendo",
        update: "aggiorna",
        updating: "aggiornando",
        copy: "copia",
        copying: "copiando",
        copied: "copiato!",
        name: "Nome",
        description: "Descrizione",
        email: "Email",
        error: "Qualcosa è andato storto. Riprova.",
        errorTitle: "Oops!",
        success: "Le tue modifiche sono state salvate.",
        successTitle: "Successo!",
        mobile: "Mobile",
        desktop: "Desktop",
        tablet: "Tablet",
        i18n: {
          languages: "Cambia lingua",
          popover: {
            header: "Seleziona la tua lingua",
          },
        },
        pagination: {
          currentPage: "Pagina",
          previousPage: "Pagina precedente",
          nextPage: "Pagina successiva",
          totalPages: "Pagine totali:",
        },
        customize: "Personalizza",
        edit: "Modifica",
        htmlEmbeddedCode: {
          buttonLabel: "Crea timer",
          hideCode: "Nascondi codice",
          modalTitle: "HTML code",
          modalDescription:
            "Incorpora il timer nel tuo sito web. Premi il pulsante qui sotto per copiare il codice.",
          linkDisclaimer:
            "Il timer contiene un link al nostro sito web, puoi rimuoverlo aggiornando alla versione premium.",
          linkDisclaimerButton: "Passa alla versione premium",
          howToText:
            "Aggiungi il timer al tuo sito web, scegli la tua piattaforma e segui le istruzioni:",
        },
      },
      premiumFeatures: {
        badgeText: "Funzione premium",
        additionalText:
          "Questa funzione è disponibile solo nella versione premium. Diventa un membro premium per accedere a questa funzione.",
        upgradeCTA: {
          variant1: "Aggiorna alla versione premium",
          variant2: "Dai un'occhiata alle funzioni",
          variant3: "Sblocca tutte le funzioni",
          variant4: "Aumenta le tue vendite",
          popover: {
            title: "Utente premium",
            body: "Diventando un utente premium potrai personalizzare e gestire i tuoi timer senza limitazioni.",
          },
        },
        modal: {
          title: "Supera i tuoi limiti",
          body: {
            default:
              "Questa funzione è disponibile solo nella versione premium. Diventa un membro premium per accedere a questa funzione.",
            newCountdown:
              "Sbloccate la versione premium per creare un numero illimitato di timer: impostate un timer per ogni campagna di sconti pianificata o personalizzate l'aspetto del timer per le vostre diverse landing page.",
          },
        },
      },
      countdowns: {
        title: "Countdowns",
        table: {
          id: "ID",
          name: "Nome",
          description: "Descrizione",
          shortcode: "Shortcode",
          actions: "Azioni",
          createdAt: "Creato il",
          updatedAt: "Aggiornato il",
        },
        firstCountdown: {
          header: "Benvenuto!",
          body: "Non hai ancora nessun timer. Clicca il pulsante sotto per crearne uno.",
          buttonLabel: "Aggiungi il tuo primo timer",
        },
      },
      countdown_edit_new: {
        buttonLabel: "Crea nuovo timer",
        header: "Nuovo timer",
        namePlaceholder: "Nome del timer",
        descriptionPlaceholder: "Descrizione del timer",
        createSuccessTitle: "Timer creato",
        createSuccess: "Adesso puoi personalizzare il timer.",
        openEditor: "Apri editor",
      },
      countdown_edit_edit: {
        buttonLabel: "Aggiorna",
        header: "Aggiorna le informazioni",
        updateSuccessTitle: "Timer aggiornato",
        updateSuccess: "Adesso puoi personalizzare il timer.",
      },
      countdown_edit_delete: {
        header: "Sei assolutamente sicuro?",
        body: "Questo cancellera il timer e le relative informazioni. Questa azione é irreversibile.",
      },
      editor: {
        close: "Chiudi editor",
        saveSettings: "Salva configurazioni",
        timezone: "Timezone",
        targetDate: "Data di scadenza",
        countdownStyle: "Stile del timer",
        propertiesBar: {
          list: "Lista dei timer",
          settings: "Data e Timezone",
          layout: "Scegli layout",
          templates: "Scegli template",
          title: "Personalizza il titolo",
          timer: "Personalizza le unità",
          labels: "Personalizza le etichette",
          separator: "Personaliza il separatore",
        },
        propertiesGroup: {
          list: {
            groupTitle: "Lista dei timer",
          },
          settings: {
            groupTitle: "Data e Timezone",
            targetDate: {
              label: "Data di scadenza",
              placeholder: "Seleziona una data",
            },
            timezone: {
              label: "Timezone",
              placeholder: "Seleziona una timezone",
            },
          },
          layout: {
            groupTitle: "Scegli layout",
            orientationLabelProp: "Seleziona orientamento",
            gapLabelProp: "Spazio tra testo e timer",
            stretchProp: "Adatta alla larghezza della pagina",
            removeLink: "Rimuovi link al timer",
            linkTarget: "Pagina di destinazione",
            transparentProp: "Fondo trasparente",
            backgroundColorProp: "Colore di sfondo",
            vertical: {
              title: "Layout verticale",
              description:
                "Il titolo é mostrato sopra il timer. Ideale per piccoli schermi.",
              label: "Verticale",
            },
            horizontal: {
              title: "Layout orrizontale",
              description:
                "Il titolo é mostrato a sinistra del timer. Ideale per schermi grandi.",
              label: "Orrizontale",
            },
          },
          templates: {
            groupTitle: "Modelli",
          },
          title: {
            groupTitle: "Stile del titolo",
            titlePlaceholder: "Scadenza al Nuovo Anno",
            text: "Testo",
            textFont: "Font del testo",
            textSize: "Dimensioni del testo",
            textColor: "Colore del testo",
          },
          separator: {
            groupTitle: "Stile del Separatore",
            showSeparatorLabel: "Visualizza separatore",
            showSeparatorAriaLabel: "Visualiza il separatore nel timer",
            separatorCharLabel: "Separatore",
            separatorCharAriaLabel: "Definisci il separatore",
          },
          unitNumber: {
            groupTitle: "Stile delle unità",
            visibility: {
              label: "Visibilità unità",
              hideDays: "Nascondi giorni",
              hideHours: "Nascondere ore",
              hideSeconds: "Nascondere secondi",
            },
            lastUnitColor: "Colore della ultima unità",
            digitsFont: "Font dei numeri",
            digitsSize: "Dimensioni dei numeri",
            digitsColor: "Colore dei numeri",
            padWithZero: "Riempi con zero",
          },
          unitLabel: {
            groupTitle: "Stile delle etichette",
            unitLabelLanguage: "Lingua",
            labelFont: "Font",
            labelSize: "Dimensioni del testo",
            labelColor: "Colore del testo",
          },
        },
        breakpointInfoMessage: {
          prefix: "Questo timer sara visualizzato nei ",
          mobile: "dispositivi Mobile.",
          desktop: "dispositivi Desktop.",
          tablet: "dispositivi Tablet.",
        },
        preview: {
          tokenBadge: "Dimensioni del display:",
          smallestDisplay: "Display più piccolo",
        },
      },
      onboarding: {
        title: "Benvenuto!",
        body: "Clockdown é uno strumento per creare e gestire i tuoi timer. Registra il tuo account per creare il tuo primo timer.",
        buttonLabel: "Registrati",
        namePlaceholder: "Nome completo",
        emailPlaceholder: "La tua migliore email",
        newsletterConsent:
          "Vorrei iscrivermi alla vostra newsletter, ma solo se mi promettete di non disturbarmi (circa 1-2 al mese). Sono consapevole di potermi cancellare quando voglio.",
        privacyAndTermsConsent:
          "I vostri termini e condizioni sono accettabili per me. Ho letto l'informativa sulla privacy. Sono consapevole che avete a cuore la mia privacy e che non condividerete mai i miei dati con nessuno.",
        privacyPolicy: "Informativa sulla privacy",
        termsAndConditions: "Termini e condizioni",
        success: {
          title: "Benvenuto!",
          subtitle: "Ora puoi creare il tuo primo timer.",
          submitButtonLabel: "Continua",
        },
        failed: {
          title: "Oops!",
          subtitle: "Qualcosa é andato storto. Riprova più tardi.",
          submitButtonLabel: "Riprova",
        },
        failure_max: {
          title: "Doppio oops!",
          subtitle:
            "Qualcosa é andato storto. Non ti preoccupare, puoi continuare a usare la nostra fantastica applicazione.",
          text: "Vai, crea il tuo primo timer!",
          submitButtonLabel: "Continua",
        },
      },
    },
  },
};

export default itIT;
