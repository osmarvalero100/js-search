const rankingUCI = [
    {
        position: 1,
        runner: "Tadej Pogacar",
        team: "UAE TEAM EMIRATES",
        points: 5531
    },
    {
        position: 2,
        runner: "Wout Van Aert",
        team: "JUMBO-VISMA",
        points: 4525
    },
    {
        position: 3,
        runner: "Remco Evenepoel",
        team: "SOUDAL QUICK-STEP",
        points: 4057
    },
    {
        position: 4,
        runner: "Jonas Vingegaard",
        team: "JUMBO-VISMA",
        points: 3154
    },
    {
        position: 5,
        runner: "Arnaud De Lie",
        team: "LOTTO DSTNY",
        points: 2490
    },
    {
        position: 6,
        runner: "Pello Bilbao López de Armentia",
        team: "BAHRAIN VICTORIOUS",
        points: 2346
    },
    {
        position: 7,
        runner: "Aleksandr Vlasov",
        team: "BORA – HANSGROHE",
        points: 2274
    },
    {
        position: 8,
        runner: "Stefan Kung",
        team: "GROUPAMA – FDJ",
        points: 2215
    },
    {
        position: 9,
        runner: "Michael Matthews",
        team: "TEAM JAYCO ALULA",
        points: 2157
    },
    {
        position: 10,
        runner: "Daniel Felipe Martínez",
        team: "INEOS GRENADIERS",
        points: 2030
    },
];

function* counterGenerator() {
    let i = 0
    while (true) {
        yield i
        i++
    }
}

function addTableRunner(runner) {
    const tableBody = document.querySelector('#runners tbody');
    const tableIndex = counterGenerator();
    const row = tableBody.insertRow(document.querySelectorAll('#runners tbody tr').length);
    for (let key in runner) {
        let currentCell = row.insertCell(tableIndex.next().value);
        currentCell.innerText = runner[key];
    }
    
}

function listRanking(runners) {
    document.querySelectorAll('#runners tbody tr').forEach(el => el.remove());
    runners.forEach(runner => {
        addTableRunner(runner);
    });
}

document.getElementById('search').addEventListener('keyup', (e) => {
    let queryParam = e.target.value;
    if (queryParam == '')
        listRanking(rankingUCI);

    let results = rankingUCI.filter(function(data) {
        return data.runner.toLowerCase().includes(this.q) 
                || data.team.toLowerCase().includes(this.q)
                || data.points == this.q
                || data.position == this.q
        }, {q: queryParam.toLowerCase()});

    listRanking(results);
});

listRanking(rankingUCI);