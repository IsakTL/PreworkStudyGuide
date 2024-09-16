const topics = ["HTML", "CSS", "Git", "JavaScript"];
const randomTopic = topics[Math.floor(Math.random() * topics.length)];
/*const shapes = ["Circle", "Square", "Sherman", "Squidward"];*/

function listTopics() {
    for (let i = 0; i < topics.length; i++) {
        console.log(topics[i])
    }
}

function alliterate() {
    if (randomTopic === 'HTML') {
        console.log("Let's hack some HTML!");
    } else if (randomTopic === 'CSS') {
        console.log("Let's study some CSS!");
    } else if (randomTopic === 'Git') {
        console.log("Let's get some Git!");
    } else if (randomTopic === 'JavaScript') {
        console.log("Let's jive some JavaScript.");
    } else {
        console.log('Huh?');
    }
}

/*UNUSED
function selectTopic() {
    if (randomTopic === 'HTML') {
        console.log("Let's study HTML!");
    } else if (randomTopic === 'CSS') {
        console.log("Let's study CSS!");
    } else if (randomTopic === 'Git') {
        console.log("Let's study Git!");
    } else if (randomTopic === 'JavaScript') {
        console.log("Let's study JavaScript!");
    } else {
        console.log('Huh?');
    }
}
*/

console.log('Here are the topics we learned through Prework:');
listTopics();
alliterate();