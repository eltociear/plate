ARG1=${1:-all}
ARG2=${2:-'.*(fixture|template|spec|__tests__).*'}

npx barrelsby -d ./src -D -l $ARG1 -q -e $ARG2