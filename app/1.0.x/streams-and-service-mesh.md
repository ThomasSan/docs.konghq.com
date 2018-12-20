---
title: Streams and Service Mesh
---


## Introduction

Kong 0.15.0 / 1.0.0 added capability to proxy and route raw TCP streams and
deploy Kong using a service mesh sidecar pattern with mutual TLS between Kong
nodes. This tutorial walks you trough a setup of a simplified service mesh
deployment using primitive tooling. It introduces new concepts, configuration
settings and tools along the way. While in production environments almost all
of this should be automated, it is nice to know how things work on a lower
level.


## Prerequisites

You need **Kong 0.15.0 / 1.0.0 or later** to run through different deployment
scenarios in this tutorial. It is recommended to use Linux distribution to run
the demos, e.g. a recent version of Ubuntu. You will also need some additional
tools to be installed on your system:

- `ncat` (usually comes with `nmap`)
- `iptables` (**Linux**) or `pfctl` (**macOS** / **BSD**)
- `curl`
- `httpie` (optional as you can just use `curl` too)

Your host machine needs to bind **lo0** (or similar) network adapter to these
localhost IPs:

* `127.0.0.1` (**Host 0** running **Kong Control Plane**)
* `127.0.0.2` (**Host A** running **Service A**)
* `127.0.0.3` (**Host A** running **Kong A**)
* `127.0.0.4` (**Host B** running **Kong B**)
* `127.0.0.5` (**Host B** running **Service B**)

We are running the experiments on a single host for simplicity. You are allowed
to use two separate nodes to run the demos, but please then note the differences
in IP addresses in related commands and configurations. For the sake of simplicity
we also configure everything using just IP addresses instead of using DNS.

For some of the configuration changes, you will also need **root** privileges on
a target host.


## Terms and Definitions

#### Kong Control Plane

**Kong Control Plane** is started on network address `127.0.0.1`. Kong Control Plane
listens on Kong Admin API on ports `8001` (HTTP), and `8444` (HTTPS), and it won't proxy
any traffic.


#### Service A

**Service A** is the one that makes the network connections to Service B. Service
A's network address is `127.0.0.2`.


#### Kong A

**Kong A** is the sidecar proxy in-front of Service A. Kong A listens on network address
`127.0.0.3` on proxy ports `8000` (HTTP), `8443` (HTTPS), and `9000` (TCP and TLS).
It does not listen or provide Kong Admin API.


#### Kong B

**Kong B** is the sidecar proxy in-front of Service B. Kong B listens on network address
`127.0.0.4` on proxy ports `8000` (HTTP), `8443` (HTTPS), and `9000` (TCP and TLS).
It does not listen or provide Kong Admin API.


#### Service B

**Service B** is the one that accepts the network connections from Service A. Service
B's network address is `127.0.0.5`, and it listens ports `18000` (HTTP), `18443` (HTTPS),
`19000` (TCP), `19001` (TLS).


