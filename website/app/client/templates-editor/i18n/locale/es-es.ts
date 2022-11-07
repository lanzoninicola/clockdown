const esEs = {
  es: {
    translation: {
      global: {
        yes: "sí",
        no: "no",
        close: "cerrar",
        save: "guardar",
        saving: "guardando",
        removing: "eliminando",
        update: "actualizar",
        updating: "actualizando",
        copy: "copiar",
        copying: "copiando",
        copied: "copiado!",
        name: "Nombre",
        description: "Descripción",
        email: "Correo electrónico",
        emailMain: "Tu correo electrónico principal",
        error: "Algo salió mal. Inténtalo de nuevo.",
        errorTitle: "Oops!",
        success: "Tus cambios se han guardado.",
        successTitle: "Éxito!",
        mobile: "Mobile",
        desktop: "Desktop",
        tablet: "Tablet",
        i18n: {
          languages: "Cambiar idioma",
          popover: {
            header: "Selecciona tu idioma",
          },
        },
        pagination: {
          currentPage: "Página",
          previousPage: "Página anterior",
          nextPage: "Página siguiente",
          totalPages: "Páginas totales:",
        },
        customize: "Personalizar",
        edit: "Editar",
        htmlEmbeddedCode: {
          buttonLabel: "Generar contador",
          hideCode: "Ocultar código",
          modalTitle: "HTML code",
          modalDescription:
            "Inserte el contador en su sitio web. Pulse el botón de abajo para copiar el código.",
          linkDisclaimer:
            "El temporizador contiene un enlace a nuestro sitio web, puede eliminarlo actualizando a la versión premium.",
          linkDisclaimerButton: "Actualizar a premium",
          howToText:
            "Agregue el temporizador a su sitio web, elija su plataforma y siga las instrucciones:",
        },
      },
      premiumFeatures: {
        badgeText: "Función premium",
        additionalText:
          "Esta función sólo está disponible en la versión premium. ¡Conviértete en miembro premium para acceder a ella.",
        upgradeCTA: {
          variant1: "Actualizar a pro",
          variant2: "Vea las funciones",
          variant3: "Desbloquea todas las funciones",
          variant4: "Aumente sus ventas",
          popover: {
            title: "Usuario PRO",
            body: "Convertirse en usuario premium le permitirá personalizar y administrar sus contadores sin ninguna limitación.",
          },
        },
        modal: {
          title: "Actualizar a premium",
          body: {
            default:
              "Esta función sólo está disponible en la versión premium. ¡Conviértete en miembro premium para acceder a ella.",
            newCountdown:
              "Desbloquee la versión premium para crear un número ilimitado de temporizadores: establezca un temporizador para cada campaña de descuento planificada o personalice el aspecto del temporizador para sus diferentes páginas de destino.",
          },
        },
      },
      countdowns: {
        title: "Contadores",
        table: {
          id: "ID",
          name: "Nombre",
          description: "Descripción",
          shortcode: "Shortcode",
          actions: "Acciones",
          createdAt: "Creado el",
          updatedAt: "Actualizado el",
        },
        firstCountdown: {
          header: "Bienvenido!",
          body: "Aún no tienes ningún contador. Haz clic en el botón de abajo para crear uno.",
          buttonLabel: "Añadir tu primer contador",
        },
      },
      countdown_edit_new: {
        buttonLabel: "Crear nuevo contador",
        header: "Nuevo contador",
        namePlaceholder: "Nombre del contador",
        descriptionPlaceholder: "Descripción del contador",
        createSuccessTitle: "Contador creado",
        createSuccess: "Ahora puedes personalizar el contador.",
        openEditor: "Abrir editor",
      },
      countdown_edit_edit: {
        buttonLabel: "Guardar",
        header: "Editar contador",
        updateSuccessTitle: "Contador actualizado",
        updateSuccess: "Ahora puedes personalizar el contador.",
      },
      countdown_edit_delete: {
        header: "Queres eliminar este contador?",
        body: "Esto eliminará el contador permanentemente.",
      },
      editor: {
        close: "Cerrar",
        saveSettings: "Guardar configuración",
        timezone: "Zona horaria",
        targetDate: "Fecha de finalización",
        countdownStyle: "Estilo del contador",
        propertiesBar: {
          list: "Lista de contadores",
          settings: "Fecha de finalización y zona horaria",
          layout: "Elegir diseño",
          templates: "Elegir Plantillas",
          title: "Personalizar titulo",
          timer: "Personalizar dígitos",
          labels: "Personalizar etiquetas",
          separator: "Personalizar separador",
        },
        propertiesGroup: {
          list: {
            groupTitle: "Lista de contadores",
          },
          settings: {
            groupTitle: "Fecha de finalización y zona horaria",
            targetDate: {
              label: "Fecha de finalización",
              placeholder: "Fecha de finalización",
            },
            timezone: {
              label: "Zona horaria",
              placeholder: "Zona horaria",
            },
          },
          layout: {
            groupTitle: "Elegir diseño",
            orientationLabelProp: "Elegir orientación",
            gapLabelProp: "Espacio entre el texto y el temporizador",
            stretchLabelProp: "Ajustar al ancho de la página",
            removeLink: "Eliminar enlace",
            linkTarget: "Enlace de destino",
            transparentProp: "Fondo transparente",
            backgroundColorProp: "Color de fondo",
            vertical: {
              title: "Diseño vertical",
              description:
                "O titulo é colocado en la parte superior y los contadores en la parte inferior. Ideal para pantallas más pequeña.",
              label: "Diseño vertical",
            },
            horizontal: {
              title: "Diseño horizontal",
              description:
                "O titulo é colocado en la parte izquierda y los contadores en la parte derecha. Ideal para pantallas más grandes.",
              label: "Diseño horizontal",
            },
          },
          templates: {
            groupTitle: "Plantillas",
          },
          title: {
            groupTitle: "Estilo del título",
            titlePlaceholder: "Fecha de finalización al Nuevo Año",
            text: "Texto",
            textFont: "Fuente del texto",
            textSize: "Tamaño del texto",
            textColor: "Color del texto",
          },
          separator: {
            groupTitle: "Estilo do separador",
            showSeparatorLabel: "Mostrar separador",
            showSeparatorAriaLabel: "Mostrar separador",
            separatorCharLabel: "Separador",
            separatorCharAriaLabel: "Define el separador",
          },
          unitNumber: {
            groupTitle: "Estilo do Unidades",
            unitsVisible: "Unidades mostradas",
            visibility: {
              label: "Visibility",
              hideDays: "Ocultar días",
              hideHours: "Ocultar horas",
              hideSeconds: "Ocultar segundos",
            },
            lastUnitColor: "Color de la última unidad",
            digitsFont: "Fuente de los dígitos",
            digitsSize: "Tamaño de los dígitos",
            digitsColor: "Color de los dígitos",
            padWithZero: "Rellenar con ceros",
          },
          unitLabel: {
            groupTitle: "Estilo de las etiquetas",
            unitLabelLanguage: "Idioma",
            labelFont: "Fuente",
            labelSize: "Tamaño do texto",
            labelColor: "Color do texto",
          },
        },
        breakpointInfoMessage: {
          prefix: "El contador se mostrará en este tamaño de pantalla:",
          mobile: "Mobile",
          desktop: "Desktop.",
          tablet: "Tablet.",
        },
        preview: {
          tokenBadge: "Tamaño de la pantalla",
          smallestDisplay: "Pantalla más pequeña",
        },
        separator: {
          label: "Separador",
          ariaLabel: "Separador",
          showSeparatorLabel: "Mostrar separador",
          showSeparatorAriaLabel: "Mostrar separador del contador",
        },
      },
      onboarding: {
        title: "Bienvenido a Clockdown!",
        subtitle:
          "Clockdown es una herramienta para crear contadores de tiempo. Registre su cuenta para comenzar.",
        buttonLabel: "Registrarme",
        namePlaceholder: "Nombre completo",
        emailPlaceholder: "Correo electrónico",
        newsletterConsent:
          "Me gustaría suscribirme a su boletín de noticias, pero sólo si prometen no molestarme (aproximadamente 1-2 al mes). Soy consciente de que puedo darme de baja cuando quiera.",
        privacyAndTermsConsent:
          "Sus condiciones son aceptables para mí.He leído la política de privacidad. Soy consciente de que os preocupáis por mi privacidad y de que nunca compartiréis mis datos con nadie.",
        privacyPolicy: "Política de privacidad",
        termsOfService: "Términos de servicio",
        success: {
          title: "¡Bienvenido!",
          subtitle: "Ahora puedes crear tu primer contador.",
          submitButtonLabel: "Continuar",
        },
        failed: {
          title: "Oops!",
          subtitle: "Algo salió mal. Por favor, inténtalo de nuevo.",
          submitButtonLabel: "Volver a intentarlo",
        },
        failure_max: {
          title: "Doble oops!",
          subtitle:
            "Nos enfrentamos a algunos problemas. No te preocupes, puedes seguir utilizando nuestra fantástica aplicación.",
          text: "Vamos, crea tu primer temporizador!",
          submitButtonLabel: "Continuar",
        },
      },
    },
  },
};

export default esEs;
