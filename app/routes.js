//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here


router.post('/part-1/hospital/child-in-hospital', function(request, response) {

    var isInHospital = request.session.data['in-hospital']
    if (isInHospital === "yes"){
        response.redirect("/part-1/hospital/went-in-date")
    } else {
        response.redirect("/part-1/hospital/overnight-stays")
    }
})

router.post('/part-1/hospital/overnight-stays', function(request, response) {

    var hasOvernight = request.session.data['overnight-stay']
    if (hasOvernight === "yes"){
        response.redirect("/part-1/hospital/went-in-and-out")
    } else {
        response.redirect("/end-screen")
    }
})


router.post('/part-1/foster-care/foster-carer', function(request, response) {

    var isFosterCarer = request.session.data['foster-carer']
    if (isFosterCarer === "yes"){
        response.redirect("/part-1/foster-care/when-child-placed")
    } else {
        response.redirect("/part-1/foster-care/relationship")
    }
})

router.post('/part-1/foster-care/who-placed', function(request, response) {

    var whoPlaced = request.session.data['who-placed']
    if (whoPlaced === "parent"){
        response.redirect("/end-screen")
    } else {
        response.redirect("/part-1/foster-care/name-of-la")
    }
})

router.post('/part-1/about-claimant/claimant-other-names', function(request, response) {

    var claimantName = request.session.data['claimant-name']
    if (claimantName === "yes"){
        response.redirect("/part-1/about-claimant/claimant-what-other-names")
    } else {
        response.redirect("/part-1/about-claimant/claimant-nino")
    }
})

router.post('/part-1/child-other-names', function(request, response) {

    var childName = request.session.data['child-name']
    if (childName === "yes"){
        response.redirect("/part-1/child-what-other-names")
    } else {
        response.redirect("/part-1/claimed-benefits")
    }
})

router.post('/part-1/going-abroad/child-abroad-over3', function(request, response) {

    var fosterCarer = request.session.data['foster-carer']
    if (fosterCarer === "yes"){
        response.redirect("/part-1/going-abroad/over-3")
    } else {
        response.redirect("/end-screen")
    }
})

router.post('/part-1/claimed-benefits', function(request, response) {

    var claimedBenefits = request.session.data['claimed-benefits']
    if (claimedBenefits === "yes"){
        response.redirect("/part-1/reference-number")
    } else {
        response.redirect("/end-screen")
    }
})

router.post('/part-1/reference-number', function(request, response) {

    var refNumber = request.session.data['ref-number']
    if (refNumber === "yes"){
        response.redirect("/part-1/reference-number-2")
    } else {
        response.redirect("/end-screen")
    }
})
