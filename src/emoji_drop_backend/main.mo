import Debug "mo:base/Debug";
import Text "mo:base/Text";
import Nat "mo:base/Nat";
import HashMap "mo:base/HashMap";

actor EmojiDrop {
  let emojis = HashMap.HashMap<Text, Nat>(0, Text.equal, Text.hash);

  public func sendEmoji(emoji : Text) : async (Text, ?Nat) {
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
};
