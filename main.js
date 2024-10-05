function process_argv() {
    const { argv } = process;
    const result = studentPortal(argv[2]);

    return result;
}

function studentPortal(studentId) {

    const studentList = [{
            id: "2010310164",
            name: "Rakanda Pangeran Nasution",
            gpa: 2.65,
            status: false,
        },
        {
            id: "2011310021",
            name: "Yosef Noferianus Gea",
            gpa: 3.1,
            status: true,
        },
        {
            id: "2014310100",
            name: "Angelia",
            gpa: 1.25,
            status: true,
        },
        {
            id: "2011320090",
            name: "Dito Bagus Prasetio",
            gpa: 2.75,
            status: true,
        },
        {
            id: "2011320100",
            name: "Hikman Nurahman",
            gpa: 2.45,
            status: true,
        },
        {
            id: "2010320181",
            name: "Edizon",
            gpa: 1.95,
            status: true,
        },
        {
            id: "2012320055",
            name: "Marrisa Stella",
            gpa: 3.5,
            status: false,
        },
        {
            id: "2012330080",
            name: "Dea Christy Keliat",
            gpa: 3,
            status: true,
        },
        {
            id: "2013330049",
            name: "Sekarini Mahyaswari",
            gpa: 3.5,
            status: true,
        },
        {
            id: "2012330004",
            name: "Yerica",
            gpa: 3.15,
            status: false,
        },
    ];
    const student = studentList.find(mahasiswa => studentId === mahasiswa.id)

    if (student === undefined) {
        return "Mahasiswa tidak terdaftar"
    } else if (student.status === false) {
        return `Mahasiswa dengan id ${studentId} sudah tidak aktif`
    }


    // let hasil = {}

    // studentList.forEach(id => {
    //     let credit = getCredits(gpa)
    //     let subject = getSubjects(credit)

    // });
    let credit = getCredits(student.gpa)
    let subject = getSubjects(credit)

    return hasil = {
        id: studentId,
        name: student.name,
        gpa: student.gpa,
        credits: credit,
        subjects: subject
    };
    // return hasil;
}

function getCredits(gpa) {
    if (gpa > 2.99) {
        return 24
    } else if (gpa >= 2.5 && gpa <= 2.99) {
        return 21
    } else if (gpa >= 2 && gpa <= 2.49) {
        return 18
    } else if (gpa >= 1.5 && gpa <= 1.99) {
        return 15
    } else if (gpa >= 0 && gpa <= 1.49) {
        return 12
    } else {
        return 'invalid sks'
    }
}

function getSubjects(credits) {

    const subjectsList = [{
            subjectName: "Ilmu Politik",
            credit: 3,
            status: "wajib",
        },
        {
            subjectName: "Ilmu Ekonomi",
            credit: 3,
            status: "wajib",
        },
        {
            subjectName: "Estetika",
            credit: 1,
            status: "pilihan",
        },
        {
            subjectName: "Kepemimpinan",
            credit: 3,
            status: "wajib",
        },
        {
            subjectName: "Etika",
            credit: 2,
            status: "pilihan",
        },
        {
            subjectName: "Sosiologi",
            credit: 3,
            status: "wajib",
        },
        {
            subjectName: "Teori Pengambil keputusan",
            credit: 3,
            status: "wajib",
        },
        {
            subjectName: "Statistika",
            credit: 3,
            status: "wajib",
        },
        {
            subjectName: "Aplikasi IT",
            credit: 3,
            status: "pilihan",
        },
    ];
    let totalCredits = 0
    let selectedSubject = []
    subjectsList.forEach(subject => {
        if (subject.status === "wajib" && totalCredits + subject.credit <= credits) {
            selectedSubject.push(subject)
            totalCredits += subject.credit
        }
    })
    let subjectPilihan = subjectsList.sort((a, b) => b.credit - a.credit)
    subjectsList.forEach(subject => {
        if (subject.status === "pilihan" && totalCredits + subject.credit <= credits) {
            selectedSubject.push(subject)
            totalCredits += subject.credit
        }
    })

    return selectedSubject; // TODO: replace this
}

// Dilarang menghapus/mangganti code dibawah ini!!!
if (process.env.NODE_ENV !== "test") {
    console.log(process_argv());
}

module.exports = {
    studentPortal,
    getSubjects,
    getCredits,
};