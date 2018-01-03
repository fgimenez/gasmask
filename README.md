[![CircleCI](https://circleci.com/gh/fgimenez/gasmask.svg?style=svg)](https://circleci.com/gh/fgimenez/gasmask)

# Gasmask - private ethereum network on top of kubernetes

gasmask allows you to run a private, single-node ethereum network on a kubernetes
cluster. The goal is creating an ephemeral, disposable ethereum environment for
making it easy to get in touch with the technology, run safe experiments with the
EVM, test  your smart contracts or enhacing your delivery pipelines.

# Requirements

For running locally you need:

* [minikube][minikube]: let's you run a local kuberentes cluster on a virtual machine.
* [kubectl][kubectl]: command line utility to interact with kubernetes.
* [helm][helm]: package manager for kubernetes, gasmask is a helm package.

[minikube]: https://github.com/kubernetes/minikube
[kubectl]: https://kubernetes.io/docs/tasks/tools/install-kubectl/
[helm]: https://github.com/kubernetes/helm

Gasmask has been developed and tested on Ubuntu 17.10, but given the availability of
the requirements it should work on OSX and Windows as well.

# How it works

First you need to spin up your local kubernetes cluster:

```
$ minikube start
```
Then, initialize the server part of the helm package manager:
```
$ helm init
```
This can take a little bit to finish, check for the tiller pod to have `Running`
status:
```
$ kubectl get pods -n kube-system -l name=tiller,app=helm
NAME                            READY     STATUS    RESTARTS   AGE
tiller-deploy-7777bff5d-f8vwm   1/1       Running   0          1m
```
Now you are ready to deploy gasmask, first clone this repo and change to the project
directory:
```
$ git clone https://github.com/fgimenez/gasmask
$ cd gasmask
```
Then, install the gasmask chart:
```
$ helm install -n gasmask ./chart
```
Now you should wait until the eth-miner pod is reported as running:
```
$ kubectl get pods -l app=eth-miner
NAME                                    READY     STATUS    RESTARTS   AGE
eth-miner-deployment-76c74c575d-8gdbx   1/1       Running   0          1m
```
Ok! All is ready to interact with the node, you can open a console session with:
```
$ pod_name=$(kubectl get pods -l app=eth-miner | grep eth | cut -d ' ' -f 1)
$ kubectl exec ${pod_name} -c eth-miner -t -i -- geth attach ipc:///data/geth.ipc
```
or directly execute a web3 command with:
```
$ kubectl exec ${pod_name} -c eth-miner -t -i -- geth --exec 'eth.getBalance(eth.accounts[0])' attach ipc:///data/geth.ipc
```
For a complete running example take a look at the [CI script][ci-script].

[ci-script]: https://github.com/fgimenez/gasmask/blob/master/.circleci/config.yml#L17
