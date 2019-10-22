import { Injectable } from '@angular/core';
import { Article } from './article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  // Liste des articles disponible
  articles: Article[];
  // Liste des articles supprimés
  articlesDeleted: Article[] = [];

  constructor() {
    this.articles = this.getFromLocalStorage();  
  }

  /**
   * Ajout un article au tableau
   * @param article Le nouvelle article à ajouter
   */
  addArticle(article) {
    // Ajout de l'article à la liste des articles
    this.articles.push(article);
  }

  /**
   * Suppréssion d'un article
   * @param article Article à supprimer
   */
  deleteArticle(article: Article) {
    // Récupération de l'index de l'article à supprimer
    const index = this.articles.findIndex( art => art.id === article.id);
    // Suppression de l'article du tableau
    this.articles.splice(index, 1);

    // Ajouter l'article dans le tableau des articles supprimés
    this.articlesDeleted.push(article);
  }

  restoreArticle(article: Article) {
    // Récupération de l'index de l'article à supprimer
    const index = this.articlesDeleted.findIndex( art => art.id === article.id);
    // Suppression de l'article du tableau
    this.articlesDeleted.splice(index, 1);

    // Ajouter l'article dans le tableau des articles disponibles
    this.articles.push(article);
  }

  /**
   * Récupération du tableau d'articles stocké dans le local storage
   */
  getFromLocalStorage(): Article[] {
    // Récupération des artciles en format 'string'
    const stringData = localStorage.getItem('articles');
    // Converstion des données de type 'string' en objet Javascript
    const articles: Article[] = JSON.parse(stringData);

    return articles;
  }

}
