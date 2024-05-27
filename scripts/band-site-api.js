const apiKey = "/?api_key=9050e407-74c4-4190-a5ec-d72a97f6cfa5";
let commentsArray = [];
let showsArray = [];
let testComment = {
    name: "John Doe",
    comment: "Great band"
};

class BandSiteApi {
    constructor(apiKey) {
        this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com";
        this.apiKey = apiKey;
    }

    async postComment(commentObj) {
        try {
            const response = await axios.post(
                this.baseUrl + "/comments" + this.apiKey, 
                {
                name: commentObj.name,
                comment: commentObj.comment
                }
            )
            console.log(response)
        } catch(error) {
            console.error(error);
        }
    }

    async getComments() {
        try {
            const response = await axios.get(this.baseUrl + "/comments" + this.apiKey);
            commentsArray = response.data;
            commentsArray.reverse();
            console.log(commentsArray);
            return commentsArray;
        } catch(error) {
            console.error(error);
        }
    }

    async getShows() {
        try {
            const response = await axios.get(this.baseUrl + "/showdates" + this.apiKey);
            console.log(response.data);
            showsArray = response.data;
            return showsArray;
        }  
        catch(error) {
            console.error(error);
        }
    }

}

const api = new BandSiteApi(apiKey)

api.getComments()
api.postComment(testComment)
api.getShows()