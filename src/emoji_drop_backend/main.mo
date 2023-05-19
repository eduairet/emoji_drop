import Debug "mo:base/Debug";
import Text "mo:base/Text";
import Nat "mo:base/Nat";
import HashMap "mo:base/HashMap";
import Bool "mo:base/Bool";

actor EmojiDrop {
  let emojis = HashMap.HashMap<Text, Nat>(0, Text.equal, Text.hash);

  public func sendEmoji(emoji : Text) : async (Text, ?Nat) {
    Debug.print(Nat.toText(emoji.size()));

    if (not checkEmoji(emoji)) {
      return ("Not an emoji", null);
    };

    let count : ?Nat = emojis.get(emoji);

    switch (count) {
      case (null) {
        emojis.put(emoji, 1);
      };
      case (?count) {
        ignore emojis.replace(emoji, count + 1);
      };
    };

    return (emoji, emojis.get(emoji));
  };

  public query func getEmoji(emoji : Text) : async (Text, ?Nat) {
    return (emoji, emojis.get(emoji));
  };

  public query func topEmoji() : async (Text, Nat) {
    var maxEmoji : Text = "";
    var maxCount : Nat = 0;

    for ((emoji, count) in emojis.entries()) {
      if (count > maxCount) {
        maxEmoji := emoji;
        maxCount := count;
      };
    };

    return (maxEmoji, maxCount);
  };

  func checkEmoji(emoji : Text) : Bool {
    if (emoji.size() != 1) { return false };
    return true;
  };
};
