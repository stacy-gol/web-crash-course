# web-crash-course task 1

```mermaid
  sequenceDiagram
    participant browser
    participant server

    browser->>server: submits input form - POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    server-->>browser: responds with HTTP status code 302 - redirect to /notes
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTTP status code 200
    deactivate server

    Note right of browser: The browser refreshes the Notes page

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: refreshed Notes page
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server

    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "hi", "date": "2023-04-01" }, ... ]
    deactivate server

    Note right of browser: The browser executes the callback function that renders the notes
    
```

```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server

    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "HTML is easy", "date": "2023-1-1" }, ... ]
    deactivate server


    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa with the content: [{ "content": "123", "date": "2023-4-2" }, ... ]
    activate server
    
Note right of browser: This is how the new note is created in SPA: the note is added on the page which is rerendered, no redirect made, the note is sent to the server as well.
```