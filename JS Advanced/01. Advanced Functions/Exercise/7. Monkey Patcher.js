function solve(input){
    if(input === "upvote"){
        this.upvotes++;
    } else if(input === "downvote"){
        this.downvotes++;
    } else if (input === "score"){ 
        let difference = this.upvotes - this.downvotes;

        let reportedUpvotes = this.upvotes;
        let reportedDownvotes = this.downvotes;

        let totalVotes = this.upvotes + this.downvotes;

        let rating = "";

        if(totalVotes > 50){
            let largerValue = Math.max(this.upvotes, this.downvotes);

            let valueToAdd = Math.ceil(largerValue * 0.25);

            reportedDownvotes += valueToAdd;
            reportedUpvotes += valueToAdd;
        }

        if(totalVotes < 10){
            rating = "new";
        } else {
            if(((this.upvotes / totalVotes) * 100)  > 66){
                rating = "hot";
            } else if (difference < 0){
                rating = "unpopular";
            } else {
                if(difference >= 0 && (this.upvotes > 100 || this.downvotes > 100)){
                    rating = "controversial";
                } else if(difference < 0 && (this.upvotes > 100 || this.downvotes > 100)) {
                    rating = "unpopular";
                } else {
                    rating = "new";
                }
            }
        }

        let resultArr = [];
        resultArr.push(reportedUpvotes);
        resultArr.push(reportedDownvotes);
        resultArr.push(difference);
        resultArr.push(rating);

        return resultArr;
    }
}