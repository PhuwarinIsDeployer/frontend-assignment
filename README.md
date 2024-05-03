# Assignment

## 1. Auto Delete Todo List

```
    [
        {
            type: 'Fruit',
            name: 'Apple',
        },
        {
            type: 'Vegetable',
            name: 'Broccoli',
        },
        {
            type: 'Vegetable',
            name: 'Mushroom',
        },
        {
            type: 'Fruit',
            name: 'Banana',
        },
        {
            type: 'Vegetable',
            name: 'Tomato',
        },
        {
            type: 'Fruit',
            name: 'Orange',
        },
        {
            type: 'Fruit',
            name: 'Mango',
        },
        {
            type: 'Fruit',
            name: 'Pineapple',
        },
        {
            type: 'Vegetable',
            name: 'Cucumber',
        },
        {
            type: 'Fruit',
            name: 'Watermelon',
        },
        {
            type: 'Vegetable',
            name: 'Carrot',
        },
    ]
```

Please make a todo list that
- Have a list of clickable buttons.
- Each button will be moved into its own column separated by type.
- Once moved, each button will have 5 seconds on the screen and then will be moved back to the bottom of the main list.
- If click on the right column (Fruit/Vegetable) the item must go back to the bottom of the left column (list) immediately.

> [!CAUTION]
> Please host the test on a hosting service and send us the link.

See example in the link below
[Video Link](https://drive.google.com/file/d/170AYx0lOXs4DLyZiPGGIgmQpFhwTKNih/view?usp=sharing)

Please do your best to show your best solution
we are looking for
1. Answer the need of question
2. Clean code easy to read

Bonus: if you have multiple solutions we could discuss those theories in our interview (no need to submit multiple versions, just send us the best one you think.)

## 2. Create data from API *(OPTIONAL)*

API from <https://dummyjson.com/users>

- Your project must use Typescript, Typescript module, and HTTP framework (GRPC is plus)
- Tranforms JSON data from API to new data groupBy department
- We encourage you to write tests, which we will give you some extra score
- We will give you an extra score if you focus on performance.

--- sample response ---

```json
    {
        [Department]: {
            "male": 1,                      // ---> Male Count Summary
            "female": 1,                    // ---> Female Count Summary
            "ageRange": "XX-XX",            // ---> Range
            "hair": {                       // ---> "Color": Color Summary
                "Black": 1,                
                "Blond": 1,
                "Chestnut": 1,
                "Brown": 1
            },
            "addressUser": {                // ---> "firstNamelastName": postalCode
                "TerryMedhurst": "XXXXX",
            }
        }
    }, 
    ...
```

```
frontend-assignment
├─ .env
├─ .eslintrc.json
├─ .git
│  ├─ config
│  ├─ description
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  ├─ sendemail-validate.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     ├─ heads
│  │     │  └─ main
│  │     └─ remotes
│  │        └─ origin
│  │           └─ HEAD
│  ├─ objects
│  │  ├─ 00
│  │  │  └─ e191584e8bf98b87b0457e4fe40ac1f256960c
│  │  ├─ 1c
│  │  │  └─ c4ba813f3bc83385d51eb1134184dc10df89b5
│  │  ├─ 28
│  │  │  └─ ed63a49d622c0ad0c9695285bf1871b9942afe
│  │  ├─ 2f
│  │  │  └─ 950331e9d4e8a46d6ac5a88c17cf41f0b8bb1d
│  │  ├─ 3b
│  │  │  └─ 89a13493cf2803411ce6875ff82d9cc36e9ee0
│  │  ├─ 3f
│  │  │  └─ bab2bf739befec93d8135d6ef440af39caf703
│  │  ├─ 5c
│  │  │  └─ 3ece37eaf84fec0a853cd64ca0d3ca4b951f6c
│  │  ├─ 6b
│  │  │  └─ 3fb3257f17d08702dac54f01e60f10af5b7084
│  │  ├─ 7c
│  │  │  └─ d7b4befad0a13b42c8c0e9230a5c84b61e308b
│  │  ├─ 8c
│  │  │  └─ 4d5de82a32cb6f5b026a8f865340b0204b5401
│  │  ├─ 92
│  │  │  ├─ 4079a40a76a7dc6207b5b829e26a15e095568c
│  │  │  └─ 99ec1758f730fd9fb5600e0454404e0220993e
│  │  ├─ a4
│  │  │  └─ 3c79df24bb539379d91b1a47263ab70a809d17
│  │  ├─ ab
│  │  │  └─ b367b4134214ffbb88881843d4ba2f84a580c2
│  │  ├─ b7
│  │  │  └─ a7f3b5196962ddd2b113e38f395683074b3cd7
│  │  ├─ d2
│  │  │  └─ d89fda37ae6cade2b1ed92de684f386c3604dd
│  │  ├─ d9
│  │  │  └─ ebcc2ce9bedd4942220ba8760b1f60a68e90b4
│  │  ├─ da
│  │  │  └─ 293d6cbf7076dba9d806e0d93cca90d2bcc173
│  │  ├─ e1
│  │  │  └─ 2fbbaa21f9c2117301f3699c53c4bc322906bc
│  │  ├─ f3
│  │  │  └─ 3d34c9661c2346edb52ae4c68a4465f9b7d4a5
│  │  ├─ ff
│  │  │  └─ 90e51ed9df264a1fb2cbec7b5c63d77dcccdf3
│  │  ├─ info
│  │  └─ pack
│  │     ├─ pack-a4613248c9e336cb8394021354692f6992008b82.idx
│  │     ├─ pack-a4613248c9e336cb8394021354692f6992008b82.pack
│  │     └─ pack-a4613248c9e336cb8394021354692f6992008b82.rev
│  ├─ packed-refs
│  └─ refs
│     ├─ heads
│     │  └─ main
│     ├─ remotes
│     │  └─ origin
│     │     └─ HEAD
│     └─ tags
├─ .gitignore
├─ next.config.mjs
├─ package.json
├─ postcss.config.mjs
├─ public
│  ├─ assets
│  │  └─ images
│  │     ├─ apple.jpg
│  │     ├─ banana.jpg
│  │     ├─ broccoli.jpg
│  │     ├─ carrot.jpg
│  │     ├─ cucumber.jpg
│  │     ├─ mango.jpg
│  │     ├─ mushroom.jpg
│  │     ├─ orange.jpg
│  │     ├─ pineapple.jpg
│  │     ├─ placeholder.png
│  │     ├─ tomato.jpg
│  │     └─ watermelon.jpg
│  ├─ next.svg
│  └─ vercel.svg
├─ README.md
├─ src
│  ├─ app
│  │  ├─ layout.tsx
│  │  └─ not-found.tsx
│  ├─ components
│  │  ├─ cardDepartment
│  │  │  ├─ CardDepartment.tsx
│  │  │  └─ type.ts
│  │  ├─ cardDetails
│  │  │  ├─ CardDetails.tsx
│  │  │  └─ type.ts
│  │  ├─ cardImageButton
│  │  │  ├─ CardImageButton.tsx
│  │  │  ├─ page.tsx
│  │  │  └─ type.ts
│  │  ├─ loadingScreen
│  │  │  └─ LoadingScreen.tsx
│  │  ├─ modalUserDepartment
│  │  │  ├─ ModalUserDepartment.tsx
│  │  │  └─ type.ts
│  │  └─ todoColumn
│  │     ├─ TodoColumn.tsx
│  │     └─ type.ts
│  ├─ hooks
│  │  └─ useGroupUsersByDepartment
│  │     ├─ type.ts
│  │     └─ useGroupUsersByDepartment.ts
│  ├─ mockData
│  │  └─ fruitAndVegetable.ts
│  ├─ pages
│  │  ├─ index.tsx
│  │  ├─ layout.tsx
│  │  ├─ summaryDepartment
│  │  │  └─ index.tsx
│  │  ├─ todoList
│  │  │  └─ index.tsx
│  │  └─ _app.tsx
│  ├─ services
│  │  ├─ api.ts
│  │  ├─ path
│  │  │  └─ serviceApi.ts
│  │  └─ summaryDepartment
│  │     └─ summaryDepartment.ts
│  ├─ styles
│  │  └─ globals.css
│  └─ types
│     ├─ todoListItem
│     │  └─ todoListItem.ts
│     └─ user
│        └─ summaryDepartmentType.ts
├─ tailwind.config.ts
├─ tsconfig.json
└─ yarn.lock

```