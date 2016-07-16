import {Http, Response} from "@angular/http";
import {Injectable} from "@angular/core";
import 'rxjs/add/operator/map';
/**
 * Created by peikanghu on 7/12/16.
 */

@Injectable()
export default class SnippetService
{
	constructor(private http: Http)
	{
		/*
		this.snippetStore = snippets.map( snippet => {
				return {
					name: snippet.name,
					code: snippet.code
				};
			});
			*/
	}

	getSnippets()
	{
		return this.http.get('app/snippet.json')
			.map((res: Response) => res.json());
	}


}

