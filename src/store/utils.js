import toast from "react-hot-toast";
import { useSnippetStore } from "./snippetsStore.js";

function toastAlert(message, type) {
  if (type === "error") {
    toast.error(message, {
      duration: 2000,
      style: {
        backgroundColor: "#202020",
        color: "#fff",
      },
    });
  }

  if (type === "success") {
    toast.success(message, {
      duration: 2000,
      style: {
        backgroundColor: "#202020",
        color: "#fff",
      },
    });
  }

  return;
}

function translations() {
  const dictionary = {
    Configuration: userLanguage("Configuration", "Configuración"),
    Language: userLanguage("Language", "Idioma"),
    Theme: userLanguage("Theme", "Tema"),
    ClearNight: userLanguage("Clear Night", "Noche Clara"),
    DarkNight: userLanguage("Dark Night", "Noche Oscura"),
    Day: userLanguage("Day", "Día"),
    FontSize: userLanguage("Font Size", "Tamaño de letra"),
    VerySmall: userLanguage("Very small", "Muy pequña"),
    Small: userLanguage("Small", "Pequeña"),
    Medium: userLanguage("Medium", "Media"),
    Large: userLanguage("Large", "Grande"),
    FontFamily: userLanguage("Font Family", "Fuente de letra"),
    CreatedBySL: userLanguage("Created by Staff Lym", "Creado por Staff Lym"),
    AddNewItem: userLanguage("Add a new item", "Añade un nuevo item"),
    EnterName: userLanguage("Enter name", "Debes ingresar un nombre"),
    RepeatedItem: userLanguage("Repeated item", "Item repetido"),
    SavedNote: userLanguage("Saved note", "Nota guardada"),
    DeletedNote: userLanguage("Deleted note", "Nota eliminada"),
    WantDelete: userLanguage("You want to delete", "Quieres eliminar"),
    MoveToTrash: userLanguage(
      "Do you want to move to the trash",
      "Quieres mover a la papelera"
    ),
    SentToTrash: userLanguage("Sent to trash", "Movido a la papelera"),
    Disabled: userLanguage("Disabled", "Deshabilitado"),
    Enabled: userLanguage("Enabled", "Habilitado"),
    TextCenter: userLanguage("Text Center", "Texto centrado"),
    ChangeOrder: userLanguage("Change order", "Alterar orden"),
    NothingHere: userLanguage("Nothing here...", "Nada por aquí..."),
    SearchItem: userLanguage("Search a item", "Busca un item"),
    Paper: userLanguage("Paper", "Papelera"),
    Clean: userLanguage("Empty", "Vaciar"),
    CleanEvery: userLanguage(
      "Do you want to delete all the files from the trash?",
      "Quieres eliminar todos los archivos de la papelera?"
    ),
    DeleteFiles: userLanguage("Deleted files", "Archivos eliminados"),
    RestoreQuestion: userLanguage("Do you want to restore", "Deseas restaurar"),
    RestoreSuccess: userLanguage("You revived ", "Reviviste a"),
  };

  return dictionary;
}

function userLanguage(enText, esText) {
  const { userConfig } = useSnippetStore();
  return userConfig.language === "en" ? enText : esText;
}

export { toastAlert, translations };
