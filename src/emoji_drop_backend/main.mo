import Bool "mo:base/Bool";
import Nat "mo:base/Nat";
import Char "mo:base/Char";
import Text "mo:base/Text";
import Iter "mo:base/Iter";
import HashMap "mo:base/HashMap";
import Debug "mo:base/Debug";

actor EmojiDrop {
  // HashMap que cuenta la cantidad de emojis recbidos
  let emojis = HashMap.HashMap<Text, Nat>(0, Text.equal, Text.hash);

  // Función que envía un emoji al Canister
  public func sendEmoji(emoji : Text) : async (Text, ?Nat) {
    // Validación de input
    if (not checkEmoji(emoji)) {
      return ("Not an emoji", null);
    };
    // Nat o null del emoji enviado
    let count : ?Nat = emojis.get(emoji);
    // Revisa si el emoji existe o no en el HashMap
    switch (count) {
      case (null) {
        // si no existe crea la entrada
        emojis.put(emoji, 1);
      };
      case (?count) {
        // Si existe aumenta el conteo
        ignore emojis.replace(emoji, count + 1);
      };
    };
    // Regresa el emoji y las veces que se ha recibido
    return (emoji, emojis.get(emoji));
  };

  // Función que encuentra un emoji en el HashMap
  public query func getEmoji(emoji : Text) : async (Text, ?Nat) {
    // Validación de input
    if (not checkEmoji(emoji)) {
      return ("Not an emoji", null);
    };
    // Regresa el emoji y las veces que se ha recibido
    return (emoji, emojis.get(emoji));
  };

  // Función que encuentra el emoji más popular
  public query func topEmoji() : async (Text, Nat) {
    var maxEmoji : Text = "";
    var maxCount : Nat = 0;
    // Loop por todas las entradas del hash map
    for ((emoji, count) in emojis.entries()) {
      if (count > maxCount) {
        // Actualiza las entradas si el conteo mayor
        maxEmoji := emoji;
        maxCount := count;
      };
    };
    // Regresa el emoji con el conteo más alto
    return (maxEmoji, maxCount);
  };

  // Función para ver todos los emojis recibidos
  public query func allEmojis() : async Text {
    var emojiList : Text = "";
    // El loop añade los emojis al texto que reune todos los emojis
    for ((emoji, count) in emojis.entries()) {
      emojiList := "(" # emoji # ", " # Nat.toText(count) # ") " # emojiList;
    };
    // Regresa todos los emojis en un solo string
    return Text.trimEnd(emojiList, #char ' ');
  };

  // Función que valida los emojis
  func checkEmoji(emoji : Text) : Bool {
    // Se revisa que el input sea de un solo caracter UTF-8
    if (emoji.size() != 1) { return false };
    // Emojis válidos, tuve que agregarlos manualmente mientras investigo cómo hacerlo de una mejor manera
    let validEmojis : Text = "😀😃😄😁😆😅😂🤣😊😇🙂🙃😉😌😍🥰😘😗😙😚😋😛😝😜🤪🤨🧐🤓😎🤩🥳😏😒😞😔😟😕🙁☹️😣😖😫😩🥺😢😭😤😠😡🤬🤯😳🥵🥶😱😨😰😥😓🤗🤔🤭🤫🤥😶😐😑😬🙄😯😦😧😮😲🥱😴🤤😪😵🤐🥴🤢🤮🤧😷🤒🤕🤑🤠😈👿👹👺";
    // Busca que el emoji de input sea válido
    for (em in validEmojis.chars()) {
      if (Text.fromChar(em) == emoji) return true;
    };
    // Si no es válido regresa falso
    return false;
  };

};
