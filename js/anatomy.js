var eye = document.querySelector("#eye"),
    heart = document.querySelector("#heart"),
    lungs = document.querySelector("#lungs"),
    spleen = document.querySelector("#spleen"),
    kidneys = document.querySelector("#kidneys"),
    pancreas = document.querySelector("#pancreas"),
    liver = document.querySelector("#liver"),
    intestines = document.querySelector("#intestines"),
    bone = document.querySelector("#bone"),
    body = document.querySelector("#body"),
    organ = document.querySelector("#organ"),
    info = document.querySelector("#info");

var anatomy = document.querySelectorAll(".anatomy");

function eyeHover() {
    console.log("eye");
    organ.innerHTML = "eyes";
    info.innerHTML = "Eye donation restores sight after disease, injury or congenital blindness.";
    var tl = new TimelineMax();
    tl.to(eye, 0.5, {scale: 1.05});
    tl.to(eye, 0.5, {scale: 1});
}
function heartHover() {
    console.log("heart");
    organ.innerHTML = "heart";
    info.innerHTML = "Hearts donated for heart valves repair birth defects in children and others. 55 Ontarians need a complete heart transplant.";
    var tl = new TimelineMax();
    tl.to(heart, 0.5, {scale: 1.05});
    tl.to(heart, 0.5, {scale: 1});
}
function lungsHover() {
    console.log("lungs");
    organ.innerHTML = "lungs";
    info.innerHTML = "62 people are waiting for lung transplants.";
    var tl = new TimelineMax();
    tl.to(lungs, 0.5, {scale: 1.05});
    tl.to(lungs, 0.5, {scale: 1});
}
function kidneysHover() {
    console.log("kidneys");
    organ.innerHTML = "kidneys";
    info.innerHTML = "1,118 adults and children in Ontario spend hours in dialysis treatment because they need Kidney transplants.";
    var tl = new TimelineMax();
    tl.to(kidneys, 0.5, {scale: 1.05});
    tl.to(kidneys, 0.5, {scale: 1});
}
function pancreasHover() {
    console.log("pancreas");
    organ.innerHTML = "pancreas";
    info.innerHTML = "2 Ontarians need a pancreas.";
    var tl = new TimelineMax();
    tl.to(pancreas, 0.5, {scale: 1.05});
    tl.to(pancreas, 0.5, {scale: 1});
}
function liverHover() {
    console.log("liver");
    organ.innerHTML = "liver";
    info.innerHTML = "231 people need a liver transplant.";
    var tl = new TimelineMax();
    tl.to(liver, 0.5, {scale: 1.05});
    tl.to(liver, 0.5, {scale: 1});
}
function intestinesHover() {
    console.log("intestines");
    organ.innerHTML = "intestines";
    info.innerHTML = "1 person is waiting for a lower bowel transplant";
    var tl = new TimelineMax();
    tl.to(intestines, 0.5, {scale: 1.05});
    tl.to(intestines, 0.5, {scale: 1});
}
function boneHover() {
    console.log("bone");
    organ.innerHTML = "bones";
    info.innerHTML = "Bone donation restores mobility and prevents amputation.";
    var tl = new TimelineMax();
    tl.to(bone, 0.5, {scale: 1.05});
    tl.to(bone, 0.5, {scale: 1});
}
function bodyHover() {
    console.log("body");
    organ.innerHTML = "skin";
    info.innerHTML = "Skin donation provides life-saving wound covering for burns.";
}

eye.addEventListener('click', eyeHover, false);
heart.addEventListener('click', heartHover, false);
lungs.addEventListener('click', lungsHover, false);
kidneys.addEventListener('click', kidneysHover, false);
pancreas.addEventListener('click', pancreasHover, false);
liver.addEventListener('click', liverHover, false);
intestines.addEventListener('click', intestinesHover, false);
bone.addEventListener('click', boneHover, false);
body.addEventListener('click', bodyHover, false);
