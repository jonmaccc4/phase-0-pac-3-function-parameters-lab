function introduction(Aki) {
    return `Hi, my name is ${Aki}.`;
}

function introductionWithLanguage(Aki, EmberJs) {
    return  (`Hi, my name is ${Aki} and I am learning to program in ${EmberJs}.`);

}

function introductionWithLanguageOptional(
    name = Aki, 
    language = "JavaScript"
    ) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }

module.exports = {introductionWithLanguageOptional };

