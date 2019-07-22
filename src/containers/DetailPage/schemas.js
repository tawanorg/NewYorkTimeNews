import { schema } from "normalizr";
import get from "lodash/get";

const getArticleId = articleId =>
	articleId.split("/").reduce((a, b) => b !== "article" && b !== null && b);

const articleResponse = new schema.Entity(
	"article",
	{},
	{
		idAttribute: "_id",
		processStrategy: props =>
			Object.assign(
				{},
				{
					id: getArticleId(props._id),
					_id: props._id,
					publishedDate: props.pub_date,
					source: props.source,
					subTitle: props.lead_paragraph,
					title: get(props.headline, "main", ""),
					types: props.type_of_material,
					webUrl: props.web_url,
					author: props.byline.original,
				}
			)
	}
);

const articleSchema = {
	docs: [articleResponse]
};

export default articleSchema;
