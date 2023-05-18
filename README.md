# EmojiDrop

Este sencillo Canister cumple la simple, pero importante función, de recibir emojis como regalo de los usuarios.

```Motoko
// HashMap que incluye todos los emojis recibidos y el número de veces que se han recibido
let emojis = HashMap.HashMap<Text, Nat>(0, Text.equal, Text.hash);

// Función que envía un nuevo emoji al actor y lo añade a emojis
public func sendEmoji(emoji : Text) : async (Text, ?Nat) {}

// Revisa si el emoji se encuentra en la lista de regalos.
public query func getEmoji(emoji : Text) : async (Text, ?Nat) {}

// Muestra el emoji más popular y el número de veces que se ha recibido.
public query func topEmoji() : async (Text, Nat) {}
```
