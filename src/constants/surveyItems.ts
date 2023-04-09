const surveyItems = {
  age: [
    {
      id: 1,
      name: '2030',
      imgSrc:
        'https://file.notion.so/f/s/8b5b7a07-5ac8-4e7d-bbad-4fde6d086695/age-1.jpg?id=95d9a850-f824-4d91-a261-bed1fa5bf488&table=block&spaceId=3ef8dbd9-414c-4cf5-813d-32ecb943cc67&expirationTimestamp=1681114895985&signature=kRGP6urQvFo86_r6YOXnduf4_wYd-o8hOMuZVDw7pQo&downloadName=age-1.jpg',
    },
    {
      id: 2,
      name: '4050',
      imgSrc:
        'https://file.notion.so/f/s/6eda6a38-a79e-4bda-82ba-69c2d886a002/age-2.jpg?id=b5ca6f3e-647b-4320-9656-16222475772b&table=block&spaceId=3ef8dbd9-414c-4cf5-813d-32ecb943cc67&expirationTimestamp=1681114907875&signature=2qf05xsNvGIkF4gCQzUmatfKJQswThQrGPUvT2DPDH0&downloadName=age-2.jpg',
    },
    {
      id: 3,
      name: '6070',
      imgSrc:
        'https://file.notion.so/f/s/23dfe618-bb6b-4b4c-bbbb-4b2a1cf03136/age-3.jpg?id=a4134808-9dfe-4c04-8053-3f7dec56ac4e&table=block&spaceId=3ef8dbd9-414c-4cf5-813d-32ecb943cc67&expirationTimestamp=1681114916813&signature=61-Kz61hXeBBI8YCleJOUrFnD7epclkohCtxyWbWgyY&downloadName=age-3.jpg',
    },
    {
      id: 4,
      name: '그 외',
      imgSrc:
        'https://file.notion.so/f/s/2658ebc0-7afd-434e-8025-882270f64651/age-4.jpg?id=f78ec692-f69c-4645-b9f0-65c283fa303f&table=block&spaceId=3ef8dbd9-414c-4cf5-813d-32ecb943cc67&expirationTimestamp=1681114929300&signature=CuiyNJ3pVKEPuPFtJY7udGXklb8wibHBwuhExrI295k&downloadName=age-4.jpg',
    },
  ],
  gender: [
    {
      id: 5,
      name: '여자',
      imgSrc:
        'https://file.notion.so/f/s/c473053d-2eb3-4c76-91ef-15bae8174fe5/woman.jpg?id=e788f1bd-9ecd-41c6-b870-53da5b653b30&table=block&spaceId=3ef8dbd9-414c-4cf5-813d-32ecb943cc67&expirationTimestamp=1681116048850&signature=bPzlZA6z7OYNE4PHI8ifRKFkOMWb-mKjXFkn1dt9w5g&downloadName=woman.jpg',
    },
    {
      id: 6,
      name: '남자',
      imgSrc:
        'https://file.notion.so/f/s/14bc8d58-bbec-4938-a90c-1c1dcc44bdfe/man.jpg?id=65820d0c-6164-4bfc-9dc5-a63980ace9dd&table=block&spaceId=3ef8dbd9-414c-4cf5-813d-32ecb943cc67&expirationTimestamp=1681115863395&signature=rYAAyQ_p0DmPiZ95FJZEuoChg7psFE36ZmnVwyaimG8&downloadName=man.jpg',
    },
  ],
  companion: [
    {
      id: 7,
      name: '부부',
      imgSrc:
        'https://file.notion.so/f/s/2ab7326b-4b17-40c0-a54b-45a260124772/couple.jpg?id=df04becd-b3cb-41d7-baed-f346ece60973&table=block&spaceId=3ef8dbd9-414c-4cf5-813d-32ecb943cc67&expirationTimestamp=1681115072266&signature=cHIFr6t7HHxcbx-tI8V_zmaCqQvinpaQpRGN1WMaY2E&downloadName=couple.jpg',
    },
    {
      id: 8,
      name: '친구',
      imgSrc:
        'https://file.notion.so/f/s/a1ada3fe-03af-4463-bf98-919a966c77c4/friends.jpg?id=9a2186a1-2f0e-47e2-bc5d-0857ee23b3f4&table=block&spaceId=3ef8dbd9-414c-4cf5-813d-32ecb943cc67&expirationTimestamp=1681115798435&signature=M-Aijj0iOkxGhM8L_CGbwAOAtaiMmrEjgi__Ra3LeXo&downloadName=friends.jpg',
    },
    {
      id: 9,
      name: '동호회',
      imgSrc:
        'https://file.notion.so/f/s/3db41022-3e9d-44c4-874c-1edbd552cea4/team.jpg?id=4ac5a39d-ba16-4a9d-b5d0-032abf047437&table=block&spaceId=3ef8dbd9-414c-4cf5-813d-32ecb943cc67&expirationTimestamp=1681115945616&signature=ldhHbf8nyuCZiozLJWvOtiZGSx6GdKmbIdtCWeLMigo&downloadName=team.jpg',
    },
    {
      id: 10,
      name: '직장동료',
      imgSrc:
        'https://file.notion.so/f/s/7676814d-1bbc-40c6-9420-d385d98e46d7/company.jpg?id=39287b0a-fdfe-48b4-87ca-d6b7c09157d2&table=block&spaceId=3ef8dbd9-414c-4cf5-813d-32ecb943cc67&expirationTimestamp=1681115058892&signature=pMd6ZGM00-uWbi3GN9NRbxTADoHO1hfok6ymrC8e2IQ&downloadName=company.jpg',
    },
    {
      id: 11,
      name: '가족',
      imgSrc:
        'https://file.notion.so/f/s/d2ee07f1-759f-4bf0-ab1e-d41ed36cde61/family.jpg?id=7ab9e41a-7b20-4d04-9795-3a9fd22c48f1&table=block&spaceId=3ef8dbd9-414c-4cf5-813d-32ecb943cc67&expirationTimestamp=1681115783255&signature=zts2sN_mfNM5_vQqZDXyDO7Xb5pfhcA1oEwcGpJS6_A&downloadName=family.jpg',
    },
    {
      id: 12,
      name: '그 외',
      imgSrc:
        'https://file.notion.so/f/s/f2809f2e-ccc8-4de5-aa7b-db27ccda5a01/etc.jpg?id=d6deefa6-8d02-4fb6-9328-bdcbbda9811a&table=block&spaceId=3ef8dbd9-414c-4cf5-813d-32ecb943cc67&expirationTimestamp=1681115759776&signature=oresFcTatOBBSkMVmyMkcWtpdH0TL5oLYDGGwwveWL8&downloadName=etc.jpg',
    },
  ],
  religion: [
    {
      id: 13,
      name: '불교',
      imgSrc:
        'https://file.notion.so/f/s/aabf8c24-1d37-4e07-af44-6f1c67a6df85/buddism.jpg?id=624919ce-669e-4584-a3c3-8ff2a26b9a08&table=block&spaceId=3ef8dbd9-414c-4cf5-813d-32ecb943cc67&expirationTimestamp=1681114967110&signature=_ygnSfMg87UIXda-R83BfMzKEJY3LxAqJKo96AfAF34&downloadName=buddism.jpg',
    },
    {
      id: 14,
      name: '기독교',
      imgSrc:
        'https://file.notion.so/f/s/5f520375-9242-46c2-8e61-23b7338cc70f/catholic.jpg?id=90d7cbdd-65e0-4b68-8f23-c978d08b2f4e&table=block&spaceId=3ef8dbd9-414c-4cf5-813d-32ecb943cc67&expirationTimestamp=1681114983142&signature=ni1cFHrvunagwgwVSl2zwh-5tQGINfN0oWIryQmuJZ0&downloadName=catholic.jpg',
    },
    {
      id: 15,
      name: '그 외',
      imgSrc:
        'https://file.notion.so/f/s/1fe0e7ae-e673-48c9-bf99-cc61a5064fa9/judaism.jpg?id=78066133-0f65-4047-bd6c-21ee1df6c063&table=block&spaceId=3ef8dbd9-414c-4cf5-813d-32ecb943cc67&expirationTimestamp=1681115843307&signature=cv4h_iONrTp6sjCTjSAF-vqkNR13bttFzGR0N7yoHiI&downloadName=judaism.jpg',
    },
    {
      id: 16,
      name: '무교',
      imgSrc:
        'https://file.notion.so/f/s/3e71d5f1-2368-4238-a488-32524bf502c9/none-rel.jpg?id=68789485-b2d2-4fc2-a9b1-473e1a95c3b5&table=block&spaceId=3ef8dbd9-414c-4cf5-813d-32ecb943cc67&expirationTimestamp=1681115885095&signature=HZFerNJ1qVGGcwZwcN_heuUAJxY8m6I02q7uxXXGg7U&downloadName=none-rel.jpg',
    },
  ],
  theme: [
    {
      id: 17,
      name: '쇼핑',
      imgSrc:
        'https://file.notion.so/f/s/801bdeac-90bd-4796-87e1-369a29f142e9/shopping.jpg?id=c397e0c2-f93d-419e-94fb-0fb5fd741504&table=block&spaceId=3ef8dbd9-414c-4cf5-813d-32ecb943cc67&expirationTimestamp=1681115899953&signature=X_A3Fq_QEIqC9C_JPxfOnFY2N34ljRdNQzaLdknnNRg&downloadName=shopping.jpg',
    },
    {
      id: 18,
      name: '와인',
      imgSrc:
        'https://file.notion.so/f/s/8350ea4c-c26c-455e-a93c-a3d5d73dd362/wine.jpg?id=2ab9f58e-b874-4d1c-8d96-93f63a5cbc2f&table=block&spaceId=3ef8dbd9-414c-4cf5-813d-32ecb943cc67&expirationTimestamp=1681115992370&signature=Kq8u8cY67DgWH6hDgbCWMCqfLl05t3btJpRtlgbacaE&downloadName=wine.jpg',
    },
    {
      id: 19,
      name: '문화탐방',
      imgSrc:
        'https://file.notion.so/f/s/3518049c-57f0-4e5b-a55a-db15157a8563/culture.jpg?id=2f8722f6-0dfd-406f-a5bf-055fd61c6359&table=block&spaceId=3ef8dbd9-414c-4cf5-813d-32ecb943cc67&expirationTimestamp=1681115083472&signature=a3wTpoL3GZu_tnT-IWkKxbjwAo-PRsQM1jETeAyHEj4&downloadName=culture.jpg',
    },
    {
      id: 20,
      name: '성지순례',
      imgSrc:
        'https://file.notion.so/f/s/1fe0e7ae-e673-48c9-bf99-cc61a5064fa9/judaism.jpg?id=78066133-0f65-4047-bd6c-21ee1df6c063&table=block&spaceId=3ef8dbd9-414c-4cf5-813d-32ecb943cc67&expirationTimestamp=1681115843307&signature=cv4h_iONrTp6sjCTjSAF-vqkNR13bttFzGR0N7yoHiI&downloadName=judaism.jpg',
    },
    {
      id: 21,
      name: '봉사활동',
      imgSrc:
        'https://file.notion.so/f/s/675c3542-2a06-4312-b615-3fc87570bde6/volunteer.jpg?id=4453cfd8-7b12-408a-b050-aab899ed11b0&table=block&spaceId=3ef8dbd9-414c-4cf5-813d-32ecb943cc67&expirationTimestamp=1681115979912&signature=S88jsbZ6pM0HsoEIa9CezcEWPucmXFaHp7sfve5q8t8&downloadName=volunteer.jpg',
    },
    {
      id: 22,
      name: '트레킹',
      imgSrc:
        'https://file.notion.so/f/s/866e0edb-d322-4482-be9b-c3994c9aa5e7/tracking.jpg?id=c6bc01fb-9e46-4f3a-841f-f15e3febb094&table=block&spaceId=3ef8dbd9-414c-4cf5-813d-32ecb943cc67&expirationTimestamp=1681115963992&signature=9xobUO1CPkFKb0PF7_G0U0bP7rurl5gwxwmSMlm5MO4&downloadName=tracking.jpg',
    },
    {
      id: 23,
      name: '골프',
      imgSrc:
        'https://file.notion.so/f/s/5e9d3e44-619e-4af3-a8a2-dacbdc033b49/golf.jpg?id=c5cd67d9-35c5-42bc-a2ee-8cbb09da26b4&table=block&spaceId=3ef8dbd9-414c-4cf5-813d-32ecb943cc67&expirationTimestamp=1681115818152&signature=6hUk8XUlgnMZbeClPx-_l3A3OlIC4GLqo6uPHC1PGWc&downloadName=golf.jpg',
    },
    {
      id: 24,
      name: '힐링',
      imgSrc:
        'https://file.notion.so/f/s/a7e48113-96da-46ff-8728-93d683b1bb5d/hobby.jpg?id=50403f80-a37a-4e5b-9e13-c48f2b0a5a22&table=block&spaceId=3ef8dbd9-414c-4cf5-813d-32ecb943cc67&expirationTimestamp=1681115829146&signature=C_gK9LCt2al-dSoAhgSePKJvAxhoxGi-ybzGxRJUmqA&downloadName=hobby.jpg',
    },
  ],
  season: [
    {
      id: 25,
      name: '봄',
      imgSrc:
        'https://file.notion.so/f/s/74107db1-893f-47d1-b774-5aa16d02ab11/spring.jpg?id=ea8b6c57-8ec6-42a9-bbbb-fc327602508d&table=block&spaceId=3ef8dbd9-414c-4cf5-813d-32ecb943cc67&expirationTimestamp=1681115918324&signature=PTiwXD8BrkUUC-TIqtzpUnfI3Ygrcw7NHkAQfDbbFnI&downloadName=spring.jpg',
    },
    {
      id: 26,
      name: '여름',
      imgSrc:
        'https://file.notion.so/f/s/30474caa-68dd-41af-8bcb-5dc1411aeb9b/summer.jpg?id=ae3c6c0a-f29e-4b09-bd9b-97e463c4238a&table=block&spaceId=3ef8dbd9-414c-4cf5-813d-32ecb943cc67&expirationTimestamp=1681115930183&signature=3bFqPhSljkApcT2t-trx_96Fv1xAixLkNBZm_oRHMfU&downloadName=summer.jpg',
    },
    {
      id: 27,
      name: '가을',
      imgSrc:
        'https://file.notion.so/f/s/c389ada1-6a95-42cd-b1eb-7911e8b01384/autumn.jpg?id=1ae735b9-208a-4ae3-9ee8-176181edddd7&table=block&spaceId=3ef8dbd9-414c-4cf5-813d-32ecb943cc67&expirationTimestamp=1681114947970&signature=8K8ArQrjnElxYPioAdjSRpR3AOVfT55yfgF-MKtXYVM&downloadName=autumn.jpg',
    },
    {
      id: 28,
      name: '겨울',
      imgSrc:
        'https://file.notion.so/f/s/19bda29c-2de0-4351-8876-462a602440fc/winter.jpg?id=acd6bc08-9eab-4676-a1f7-0907f09fb157&table=block&spaceId=3ef8dbd9-414c-4cf5-813d-32ecb943cc67&expirationTimestamp=1681116033934&signature=-ozAGBsXYpxDo8qLOu4A9he3ikSpfncdyJfaneCjyCk&downloadName=winter.jpg',
    },
  ],
}

export default surveyItems
