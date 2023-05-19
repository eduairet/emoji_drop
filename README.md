# EmojiDrop

Este sencillo Canister cumple la simple, pero importante función, de recibir emojis como regalo de los usuarios.

## Archivos

-   Canister -> [`src/emoji_drop_backend/main.mo`](./src/emoji_drop_backend/main.mo)

## Estructura del canister

-   `emojis` -> `HashMap` que incluye todos los emojis recibidos y el número de veces que se han recibido.
-   `sendEmoji(emoji)` -> Función que envía o actualiza un nuevo emoji (incrementa el conteo).
-   `getEmoji(emoji)` -> Revisa si el emoji se encuentra en la lista de regalos.
-   `topEmoji()` -> Muestra el emoji más popular y el número de veces que se ha recibido.
-   `allEmojis()` -> Muestra todos los emojis recibidos en el canister
-   `checkEmoji(emoji)` -> Función interna que revisa que los _inputs_ del usuario sean en verdad emojis.

## Probar el canister

-   Asegurarse de tener una terminal `UNIX` y tener instalado el `SDK`

    ```Shell
    sh -ci "$(curl -fsSL https://internetcomputer.org/install.sh)"
    ```

-   Comenzar un entorno local de ejecución
    ```Shell
    # Verifica estar en el directorio de este proyecto
    dfx start
    ```
-   Despliega el canister
    ```Shell
    dfx deploy
    ```
    -   Retorna la `URL` de la **Candid UI**
        ```Shell
        ...
        URLs:
        Backend canister via Candid interface:
            emoji_drop_backend: http://127.0.0.1:4943/?canisterId=be2us-64aaa-aaaaa-qaabq-cai&id=bkyz2-fmaaa-aaaaa-qaaaq-cai
        ```
-   Juega con el canister

    ```Shell
    # Enviar emojis
    dfx canister call emoji_drop_backend sendEmoji 🙂
    # ("🙂", opt (1 : nat))
    dfx canister call emoji_drop_backend sendEmoji 🙂
    # ("🙂", opt (2 : nat))
    dfx canister call emoji_drop_backend sendEmoji 🤬
    # ("🤬", opt (1 : nat))

    # Buscar emoji
    dfx canister call emoji_drop_backend getEmoji 🙂
    # ("🙂", opt (2 : nat))

    # Buscar el emoji más popular
    dfx canister call emoji_drop_backend topEmoji
    # ("😀", 2 : nat)

    # Mostrar todos los emojis
    dfx canister call emoji_drop_backend allEmojis
    # ("(🙂, 2) (🤬, 1) ")
    ```

-   Alternativamente se puede jugar a través de la **Candid UI**
    ![Candid UI](./_resources/candid-ui.png)

-   O en el _[**playground**](https://m7sm4-2iaaa-aaaab-qabra-cai.ic0.app/)_
    ![Playground](./_resources/playground.png)

## Planes a futuro

-   [ ] Me gustaría explorar más a fondo la manera de validar los emojis utilizando los códigos de `Unicode`
-   [ ] Construir una interfaz de usuario que haga divertido el regalar emojis
-   [ ] Desplegar a mainnet
