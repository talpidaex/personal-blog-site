---
title: Network Requests
description: Magna eiusmod sint eiusmod anim sunt et est ipsum quis reprehenderit.
---

# Network Requests

- **Fetch**

  ```jsx
  let promise = fetch(url, [options]);
  ```

  Option verilmediğinde get isteğine dönüşür. Options , method veya headers olabilir.
  Tarayıcı isteği hemen başlatır ve çağıran kodun sonucu almak için kullanması gerektiğine dair bir söz döndürür.
  Yanıt almak genellikle iki aşamalı bir süreçtir.

  1. İlk olarak, fetch tarafından döndürülen promise, sunucu başlıklarla yanıt verir vermez yerleşik Response sınıfının bir nesnesiyle çözümlenir.
     1. Bu aşamada başarılı olup olmadığını görmek için HTTP durumunu kontrol edebiliriz, başlıkları kontrol edebiliriz ancak henüz gövdeye sahip değiliz.
     2. Getirme HTTP isteğini gerçekleştiremezse söz reddedilir; ağ sorunları veya böyle bir site yok. 404 veya 500 gibi anormal HTTP durumları hataya neden olmaz.
     3. Yanıt özelliklerinde HTTP durumunu görebiliriz:

  ```jsx
  let response = await fetch(url);

  if (response.ok) {
    // if HTTP-status is 200-299
    // get the response body (the method explained below)
    let json = await response.json();
  } else {
    alert("HTTP-Error: " + response.status);
  }
  ```

  2.  İkincisi, yanıt gövdesini almak için ek bir yöntem çağrısı kullanmamız gerekir.

  - **Response.text()** – yanıtı okur ve metin olarak geri döner,
  - **Response.json()** – yanıtı JSON olarak ayrıştırır,
  - **Response.formData()** – yanıtı FormData nesnesi olarak döndürür (sonraki bölümde açıklanmıştır)
  - **Response.blob()** – yanıtı Blob (türlü ikili veri) olarak döndürür,
  - **Response.arrayBuffer()** – yanıtı ArrayBuffer olarak döndürür (ikili verilerin düşük seviyeli gösterimi),

  ### Response Headers

  - Cache-control
  - Content-Type
  - Expires
  - Pragma
