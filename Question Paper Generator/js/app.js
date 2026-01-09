document.getElementById("paperForm").addEventListener("submit", function(e) {
    e.preventDefault();

    outUniversity.innerText = university.value;
    outExam.innerText = examName.value;
    outMeta.innerText =
        `${subject.value} | ${className.value} | Time: ${time.value} mins | Marks: ${totalMarks.value}`;

    generateInstructions();
    generateSection("Section A: MCQs", mcq.value, mcqMarks.value, "outMCQ");
    generateSection("Section B: Short Questions", shortQ.value, shortMarks.value, "outShort");
    generateSection("Section C: Long Questions", longQ.value, longMarks.value, "outLong");

    document.getElementById("preview").style.display = "block";
});

function generateInstructions() {
    const lines = instructions.value.split("\n");
    let html = "<p class='section-title'>Instructions:</p><ol>";
    lines.forEach(l => {
        if (l.trim()) html += `<li>${l}</li>`;
    });
    html += "</ol>";
    outInstructions.innerHTML = html;
}

function generateSection(title, text, marks, outputId) {
    if (!text.trim()) {
        document.getElementById(outputId).innerHTML = "";
        return;
    }

    const questions = text.split("\n");
    let html = `<p class="section-title">${title} (${marks} × ${questions.length} = ${marks * questions.length})</p><ol>`;

    questions.forEach(q => {
        if (q.trim()) html += `<li>${q}</li>`;
    });

    html += "</ol>";
    document.getElementById(outputId).innerHTML = html;
}
