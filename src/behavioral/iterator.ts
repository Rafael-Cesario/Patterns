interface Iterator {
	getNext(): string;
	hasMore(): boolean;
	getCurrent(): string;
}

interface IterableCollection {
	getNews(): Iterator;
}

class News implements Iterator {
	private index = 0;

	constructor(private articles: string[]) {}

	getNext(): string {
		const current = this.getCurrent();
		this.index++;
		return current;
	}

	hasMore(): boolean {
		return this.index < this.articles.length;
	}

	getCurrent(): string {
		return this.articles[this.index];
	}
}

class Distribution implements IterableCollection {
	private articles: string[] = [];

	getNews(): Iterator {
		return new News(this.articles);
	}

	addArticle(article: string) {
		this.articles.push(article);
	}
}

const distribution = new Distribution();

distribution.addArticle("article 01");
distribution.addArticle("article 02");
distribution.addArticle("article 03");
distribution.addArticle("article 04");

const news = distribution.getNews();

console.log(news.getNext());
console.log(news.getNext());
console.log(news.getNext());
console.log(news.getNext());
console.log(news.hasMore());
