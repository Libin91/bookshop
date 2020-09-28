/* let books = [
    {
        'name': '',
        'author': '',
        'price': '',
        'description': '',
        'image' : '',
    },
];*/





const books = [
    {
        name: 'Queenie',
        author: 'Candice Carty-Williams',
        price: '£' + 0.99,
        description: 'Bridget Jones’s Diary meets Americanah in this disarmingly honest, boldly political, and truly inclusive novel that will speak to anyone who has gone looking for love and found something very different in its place.',
        image: "http://books.google.com/books/content?id=NhBmDwAAQBAJ&amp;printsec=frontcover&amp;img=1&amp;zoom=1&amp;edge=curl&amp;source=gbs_api",
    },
    {
        name: 'Ghana Must Go',
        author: 'Taiye Selasi',
        price: '£' + 2.99,
        description: 'A stunning novel, spanning generations and continents, Ghana Must Go by rising star Taiye Selasi is a tale of family drama and forgiveness, for fans of Zadie Smith and Chimamanda Ngozi Adichie. This is the story of a family, of the simple, devastating ways in which families tear themselves apart, ...',
        image: "http://books.google.com/books/content?id=9j4JGEkCA5cC&amp;printsec=frontcover&amp;img=1&amp;zoom=1&amp;edge=curl&amp;source=gbs_api",
    },
    {
        name: 'The Girl Who Smiled Beads',
        author: 'Clemantine Wamariya, Elizabeth Weil',
        price: '£' + 3.99,
        description: `When Clemantine Wamariya was six years old, her world was torn apart.
        She didn't know why her parents began talking in whispers, or why her neighbours started
        disappearing, or why she could hear distant thunder even when the skies were clear. As
        the Rwandan civil war raged, Clemantine and her sister...`,
        image: "http://books.google.com/books/content?id=djc_DwAAQBAJ&amp;printsec=frontcover&amp;img=1&amp;zoom=1&amp;edge=curl&amp;source=gbs_api",
    },
    {
        name: 'Americanah',
        author: 'Chimamanda Ngozi Adichie',
        price: '£' + 3.49,
        description: `SHORTLISTED FOR THE BAILEY’S WOMEN’S PRIZE FOR FICTION ‘A delicious,
        important novel’ The Times ‘Alert, alive and gripping’ Independent ‘Some novels tell a
        great story and others make you change the way you look at the world. Americanah does
        both.’ Guardian...`,
        image: "http://books.google.com/books/content?id=QXHwNEB2CkYC&amp;printsec=frontcover&amp;img=1&amp;zoom=1&amp;edge=curl&amp;source=gbs_api",
    },
    {
        name: 'What We Lose',
        author: 'Zinzi Clemmons',
        price: '£' + 2.99,
        'description': `A short, intense and profoundly moving novel about race,
        identity, family, sex, country, and death – from one of the National Book Foundation’s 5 Under 35: an author of 
        rare, haunting power this is a stunning debut about a young African-American woman coming of age. Raised in 
        Pennsylvania, Thandi views the world of her mother’s childhood in Johannesburg as both impossibly distant 
        and ever present. She is an outsider wherever she goes, caught between being black and white...`,
        image: "http://books.google.com/books/content?id=NWrpDQAAQBAJ&amp;printsec=frontcover&amp;img=1&amp;zoom=1&amp;edge=curl&amp;source=gbs_api",
    },
    {
        name: 'The Good Lord Bird',
        author: 'James McBride',
        price: '£' + 8.38,
        description: `oon to be a Showtime limited series starring Ethan Hawke Winner of
        the National Book Award for Fiction A Washington Post, Publishers Weekly, Oprah Magazine
        Top 10 Book of the Year From the bestselling author of The Color of Water, Song Yet
        Sung, Five-Carat Soul, and Kill 'Em and Leave, a James Brow...`,
        image: "http://books.google.com/books/content?id=BnudfIm9NMUC&amp;printsec=frontcover&amp;img=1&amp;zoom=1&amp;edge=curl&amp;source=gbs_api",
    },
    {
        name: 'Ordinary Light',
        author: 'John S. Green',
        price: '£'+ 3.83,
        description: `Real, raw, and funny, the voice of John S. Green takes you on a
        lifelong journey of seeking sacred resting places in the middle of lifes ever increasing
        chaos and distractions. Headlines scream, Beware! Look out! The end is near! A
        lightning, flashing, neon pulse that blinds us from the ordinary lig...`,
        image: "http://books.google.com/books/content?id=xeHGDgAAQBAJ&amp;printsec=frontcover&amp;img=1&amp;zoom=1&amp;edge=curl&amp;source=gbs_api",
    },
    {
        name: 'The Water Dancer',
        author: 'Ta-Nehisi Coates',
        price: '£'+ 6.99,
        description: `The unmissable debut novel by the critically acclaimed author of
        Between the World and Me andWe Were Eight Years in Power - a richly imagined and
        compulsively page-turning journey to freedom OPRAH BOOK CLUB PICK 'I haven't felt this
        way since I first read Beloved... I wish Toni [Morrison] was alive ...`,
        image: "http://books.google.com/books/content?id=f2KMDwAAQBAJ&amp;printsec=frontcover&amp;img=1&amp;zoom=1&amp;edge=curl&amp;source=gbs_api",
    },
    {
        name:'Known and Strange Things',
        author: 'Teju Cole',
        price: '£'+ 5.03,
        description: `A blazingly intelligent first collection of essays from the
        award-winning author of Open City and Every Day Is for the Thief. With these pieces on
        politics, photography, travel, history and literature - many of which have become viral
        sensations, shared and debated around the globe - Teju Cole solid..`,
        image: "http://books.google.com/books/content?id=tiSPDAAAQBAJ&amp;printsec=frontcover&amp;img=1&amp;zoom=1&amp;edge=curl&amp;source=gbs_api",
    }
    
];

function allBooks(bookList) {
    const bookstore = document.querySelector('#bookstore');
    bookList.forEach(book => {
        const listItem = document.createElement('li');
        const text = document.createTextNode(book.name);
        listItem.appendChild(text);
        bookstore.appendChild(listItem);
    });
    
 

};
allBooks(books);
